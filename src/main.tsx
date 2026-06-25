import { CanvasShell, React } from "cursor/canvas";
import { createRoot } from "react-dom/client";
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
