import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set VITE_BASE_PATH=/repo-name/ when deploying to GitHub Pages project site.
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [
    react({
      // Vendor bundle is prebuilt; skip Babel on the 1.7MB canvas runtime.
      exclude: [/node_modules/, /vendor\/canvas-runtime\.esm\.js/],
      // Canvas runtime only ships production jsx-runtime exports.
      jsxDev: false,
    }),
  ],
  resolve: {
    alias: [
      { find: "cursor/canvas", replacement: path.resolve(__dirname, "src/cursor-canvas.ts") },
      // Canvas components ship with their own React — route app code to the same instance.
      {
        find: "react/jsx-dev-runtime",
        replacement: path.resolve(__dirname, "vendor/react/jsx-dev-runtime.js"),
      },
      {
        find: "react/jsx-runtime",
        replacement: path.resolve(__dirname, "vendor/react/jsx-runtime.js"),
      },
      {
        find: "react-dom/client",
        replacement: path.resolve(__dirname, "vendor/react-dom/client.js"),
      },
      { find: /^react$/, replacement: path.resolve(__dirname, "vendor/react/index.js") },
    ],
    dedupe: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
