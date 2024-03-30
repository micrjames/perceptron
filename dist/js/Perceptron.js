"use strict";
import { Random } from "./Random.js";
import { dot } from "./utils.js";
export class Perceptron {
    constructor(n) {
        this.c = 0.01;
        this._weights = Random.populate(n, -100, 100, true);
    }
    sum(inputs) {
        return dot(this._weights, inputs);
    }
    feedforward(inputs) {
        const sum = this.sum(inputs);
        return this.activate(sum);
    }
    activate(sum) {
        if (sum > 0)
            return 1;
        return -1;
    }
    train(inputs, desired) {
        const guess = this.feedforward(inputs);
        const error = desired - guess;
        this._weights = this._weights.map((weight, i) => weight + this.c * error * inputs[i]);
    }
    get weights() {
        return this._weights;
    }
}
