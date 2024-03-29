class Trainer {
   private inputs: number[];
   private answer: number;

   constructor(x: number, y: number, a: number) {
	  this.inputs = [x, y, 1];
	  this.answer = a;
   }
}

exports.Trainer = Trainer;
