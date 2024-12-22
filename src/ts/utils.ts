export const dot = (a: number[], b: number[]) => {
   return a.reduce((acc, n, i) => acc + (n * b[i]), 0);
};
