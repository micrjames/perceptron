import { container } from "./incs";
import { setupCanvas } from "./canvasSetup";

export function init(width?: number, height?: number) {
   const canvas = setupCanvas(container, width, height);
   const ctx = canvas.getContext("2d");

   if(ctx) {
   } else {
	  console.error("2D context not available.");
   }
}
