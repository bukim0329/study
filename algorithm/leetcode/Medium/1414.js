/**
 * @param {number} k
 * @return {number}
 */
const findMinFibonacciNumbers = function (k) {
  if (k === 0) {
    return 0;
  }
  const fibo = [1, 1];
  while (fibo[fibo.length - 1] <= k) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return 1 + findMinFibonacciNumbers(k - fibo[fibo.length - 2]);
};
