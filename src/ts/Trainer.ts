class Trainer {
   private _inputs: number[];
   private _answer: number;

   constructor(x: number, y: number, a: number) {
	  this._inputs = [x, y, 1];
	  this._answer = a;
   }
   get inputs(): number[] {
	  return this._inputs;
   }
   get answer(): number {
	  return this._answer;
   }
}

exports.Trainer = Trainer;
