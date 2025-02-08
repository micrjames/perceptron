import { Circle } from "./Circle";
import { DrawType } from "./utils";

export class Animation {
   private circle: Circle;
   private colors: string[];
   private intervalMS: number;

   private animationFrameId: number | null;
   private lastUpdate: number;
   private currentColorIndex: number;

   constructor(circle: Circle, colors: string[], intervalMS: number = 1000) {
	  this.circle = circle;
	  this.colors = colors;
	  this.intervalMS = intervalMS;

	  this.animationFrameId = null;
	  this.lastUpdate = 0;
	  this.currentColorIndex = 0;
   }

   start() {
	  if(this.animationFrameId !== null)
		 this.stop();	// Stop any existing animation

	  this.lastUpdate = performance.now();

	  const animate = (timestamp: number) => {
		 if(timestamp - this.lastUpdate > this.intervalMS) {
			// Change to next color
			this.currentColorIndex = (this.currentColorIndex + 1)%this.colors.length;
			this.circle._color.fill = this.colors[this.currentColorIndex];

			// Redraw with new color
			this.circle.draw(<CanvasRenderingContext2D>this.circle.ctx, DrawType.Fill);

			this.lastUpdate = timestamp;
		 }
		 
		 // Continue animation
		 this.animationFrameId = requestAnimationFrame(animate);
	  };

	  // Start animation
	  this.animationFrameId = requestAnimationFrame(animate);
   }

   stop() {
	  if(this.animationFrameId !== null) {
		 cancelAnimationFrame(this.animationFrameId);
		 this.animationFrameId = null;
	  }
   }
}
