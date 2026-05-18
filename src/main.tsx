import React from "react";
import { createRoot } from "react-dom/client";
import { CanvasShell } from "../vendor/canvas-runtime.esm.js";
import DueDiligence from "./DueDiligence";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <CanvasShell>
        <DueDiligence />
      </CanvasShell>
    </React.StrictMode>,
  );
}
