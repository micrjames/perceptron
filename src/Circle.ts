import { Point, DrawType, sfColor } from "./utils";

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
}
