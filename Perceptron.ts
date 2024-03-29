const { Random } = require("../Random/Random");
const { dot } = require("./utils");

class Perceptron {
   private _weights: number[];
   private c: number;

   constructor(n: number) {
	  this.c = 0.01;
	  this._weights = Random.populate(n, -100, 100, true);
   }

   sum(inputs: number[]): number {
	  return dot(this._weights, inputs);
   }

   feedforward(inputs: number[]): number {
	  const sum = this.sum(inputs);
	  return this.activate(sum);
   }

   activate(sum: number): number {
		if(sum > 0) return 1;
		return -1;
   }

   train(inputs: number[], desired: number) {
		const guess = this.feedforward(inputs);
		const error = desired - guess;

	    this._weights = this._weights.map((weight, i) => weight + this.c * error * inputs[i]);
	}

   get weights(): number[] {
	  return this._weights;
   }
}

exports.Perceptron = Perceptron;
