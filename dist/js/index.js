import { Perceptron } from "./Perceptron.js";
import { Trainer } from "./Trainer.js";
import { Random } from "./Random.js";

let ptron;
const training = [];
const numTrainers = 20000;
let count = 0;
let randX;
let randY;

window.setup = function() {
  const canvas = createCanvas(640, 360);
  canvas.parent("container");
  const left = (windowWidth - width) / 2;
  const top = (windowHeight - height) / 2;
  canvas.position(left, top);
  ptron = new Perceptron(3);
  randX = new Random(-width/2, width/2);
  randY = new Random(-height/2, height/2);
  for(let i = 0; i < numTrainers; i++) {
	  const x = randX.number;
	  const y = randY.number;
	  let answer = 1;
	  if(y < x) answer = -1;
	  training[i] = new Trainer(x, y, answer);
  }
}

window.draw = function() {
  background(255);
  stroke(0);
  line(0, 0, width, height);
  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;
  for(let i = 0; i < count; i++) {
	  stroke(0);
	  let guess = ptron.feedforward(training[i].inputs);
	  if(guess > 0) noFill();
	  else fill(0);
	  ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
  }
}
