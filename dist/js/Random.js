"use strict";
export class Random {
    constructor(minimum = -1, maximum = -1) {
        this.minimum = minimum;
        this.maximum = maximum;
    }
    set min(value) {
        this.minimum = value;
    }
    get min() {
        return this.minimum;
    }
    set max(value) {
        this.maximum = value;
    }
    get max() {
        return this.maximum;
    }
    get number() {
        return Math.random() * (this.maximum - this.minimum + 1) + this.minimum;
    }
    get integer() {
        return Math.floor(this.number);
    }
    get zeroOrOne() {
        return Math.round(Math.random());
    }
    choice(nums) {
        this.minimum = 0;
        this.maximum = nums.length - 1;
        return nums[this.integer];
    }
    static populate(n, start = 0, end = 100, frac = false) {
        return Array.from({ length: n }, _ => {
            let randNum = new Random(start, end).integer;
            if (frac)
                return randNum /= end;
            return randNum;
        });
    }
}
