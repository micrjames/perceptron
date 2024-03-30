"use strict";
export const dot = (a, b) => {
    return a.reduce((acc, n, i) => acc + (n * b[i]), 0);
};
