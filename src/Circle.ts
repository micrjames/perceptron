import { Point, DrawType, sfColor } from "./utils";
import { container } from "./incs"; 

export class Circle {
   private point: Point;
   private radius: number;
   private color: sfColor; 

   constructor(point: Point, radius: number, fillColor?: string, strokeColor?: string) {
      this.point = point;
      this.radius = radius;
      this.color = {
         "fill": fillColor,
         "stroke": strokeColor
      };
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

   get ctx(): CanvasRenderingContext2D | null | undefined {
	  const canvas = container?.firstElementChild as HTMLCanvasElement | null;
	  const ctx = canvas?.getContext('2d');
	  return ctx;
   }
}
