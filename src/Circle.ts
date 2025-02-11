import { Point, DrawType, sfColor, Animatable } from "./utils";
import { container } from "./incs"; 

export class Circle implements Animatable {
   private point: Point;
   private radius: number;
   private color: sfColor; 
   private colors: string[];
   private currentColorIndex: number;

   constructor(point: Point, radius: number, fillColor?: string, strokeColor?: string, ...colors: string[]) {
      this.point = point;
      this.radius = radius;
      this.color = {
         "fill": fillColor,
         "stroke": strokeColor
      };
	  this.colors = colors;
	  this.currentColorIndex = 0;
   }

   get _color(): sfColor {
	  return this.color;
   }

   draw(ctx: CanvasRenderingContext2D, drawType: DrawType = DrawType.None, lineWidth: number = 1) {
      if(drawType === DrawType.None) return;
      
      ctx.beginPath();
      ctx.arc(this.point.x || 0, this.point.y || 0, this.radius, 0, Math.PI*2);
      
      if(drawType === DrawType.Fill || drawType === DrawType.FillAndStroke) {
         if (this.color.fill) {
            ctx.fillStyle = <string>this.color.fill;
            ctx.fill();
         }
      }
      if(drawType === DrawType.Stroke || drawType === DrawType.FillAndStroke) {
         if (this.color.stroke) {
            ctx.strokeStyle = <string>this.color.stroke;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
         }
      }
   }

   animateColor(timestamp: number) {
	  console.log(timestamp);
	  // Change to next color
	  this.currentColorIndex = (this.currentColorIndex + 1)%this.colors.length;
	  // this.circle._color.fill = this.colors[this.currentColorIndex];
	  this._color.fill = this.colors[this.currentColorIndex];
	  
	  // Redraw with new color
	  this.draw(<CanvasRenderingContext2D>this.ctx, DrawType.Fill);
   }

   get ctx(): CanvasRenderingContext2D | null | undefined {
	  const canvas = container?.firstElementChild as HTMLCanvasElement | null;
	  const ctx = canvas?.getContext('2d');
	  return ctx;
   }
}
