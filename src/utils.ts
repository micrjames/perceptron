export type Point = {
   x: number | undefined, y: number | undefined
}
export enum DrawType {
   None = 0,
   Fill = 1,
   Stroke = 2,
   FillAndStroke = 3
}
export interface sfColor {
   "stroke": String | undefined;
   "fill": String | undefined;
};
export interface Animatable {
   draw(ctx: CanvasRenderingContext2D, drawType: DrawType): void;
   _color: sfColor;
   get ctx(): CanvasRenderingContext2D | null | undefined;
}
