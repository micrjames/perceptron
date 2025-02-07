import { container } from "./incs";
import { setupCanvas } from "./canvasSetup";
import { Circle } from "./Circle";
import { DrawType } from "./utils";

export function init(width?: number, height?: number) {
   const canvas = setupCanvas(container, width, height);
   const ctx = canvas.getContext("2d");

   if(ctx) {
	  const rect = canvas.getBoundingClientRect();
	  const circle = new Circle({
		 x: rect.x, y: rect.y
	  }, 100, "lightgreen", "green");
	  circle.draw(ctx, DrawType.FillAndStroke, 5);
   } else {
	  console.error("2D context not available.");
   }
}
