const { Perceptron } = require("../Perceptron");
const { Random } = require("../../Random/Random");

describe("A Perceptron", () => {
   let ptron: typeof Perceptron;
   let weights: number[];
   let input: number[];
   beforeAll(() => {
	  ptron = new Perceptron(3);
	  weights = ptron.weights;
	  input = [50, -12, 1];
   });
   describe("Has weights.", () => {
	  test("Should not be empty.", () => {
		 expect(weights).not.toBeFalsy();
	  });
	  test("Should be randomly generated values.", () => {
		 weights.forEach((num: number) => {
			expect(num.toString()).toMatch(/^(-?[0]([.][0-9]+)?)$|^-?1?$/);
		 });
	  });
   });
   describe("Has inputs.", () => {
	  test("Should sum to a calculated value.", () => {
		 const result = ptron.sum(input);
		 expect(result).toBe(weights[0]*input[0] + weights[1]*input[1] + weights[2]*input[2]);
	  });
	  test("Should result as either -1 or 1.", () => {
		 const negOneAndOne = [-1, 1];
		 const output = ptron.feedforward(input);
		 expect(negOneAndOne.includes(output)).toBeTruthy();
	  });
   });
   describe("Can be trained.", () => {
	  test("Should adjust the weights.", () => {
		 const guess = ptron.feedforward(input);
		 const desired = new Random().zeroOrOne;
		 const oldWeights = weights;
		 for(let i = 0; i < oldWeights.length; i++) {
			oldWeights[i] += 0.01 * (desired - guess) * input[i];
		 }
		 ptron.train(input, desired);
		 expect(ptron.weights).toEqual(oldWeights);
	  });
   });
});
