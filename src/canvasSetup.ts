export function setupCanvas(container: Element | null, width?: number, height?: number): HTMLCanvasElement {
   const canvas = document.createElement("canvas");
   canvas.id = "myCanvas";
   if(container)
	  container.appendChild(canvas);

   let canvasWidth: number;
   let canvasHeight: number;
   if(width && height) {
	  canvasWidth = width;
	  canvasHeight = height;
   } else {
	  canvasWidth = window.innerWidth/2;
	  canvasHeight = window.innerHeight/2;
   }
   canvas.width = canvasWidth;
   canvas.height = canvasHeight;

   return canvas;
}
