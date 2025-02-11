import { container } from "./incs";
import { setupCanvas } from "./canvasSetup";
import { Circle } from "./Circle";
// import { DrawType } from "./utils";
import { Animation } from "./Animation";

export function init(width?: number, height?: number) {
   const canvas = setupCanvas(container, width, height);
   const ctx = canvas.getContext("2d");

   if(ctx) {
	  const rect = canvas.getBoundingClientRect();
	  const circle = new Circle({
		 x: rect.x, y: rect.y
	  }, 100, "blue", "red", "green", "yellow"); // , "lightgreen", "green");
	  // circle.draw(ctx, DrawType.FillAndStroke, 5);
	  // const colorAnimation = new Animation<Circle>(circle, ["red", "blue", "green", "yellow"], 2000);
      const circleAnimation = new Animation((timestamp: number) => {
		  circle.animateColor(timestamp);
	  }, 2000);	  
	  circleAnimation.start(); // Start the animation

// Later, to stop:
// colorAnimation.stop();
   } else {
	  console.error("2D context not available.");
   }
}
