"use strict";
export class Trainer {
    constructor(x, y, a) {
        this._inputs = [x, y, 1];
        this._answer = a;
    }
    get inputs() {
        return this._inputs;
    }
    get answer() {
        return this._answer;
    }
}
