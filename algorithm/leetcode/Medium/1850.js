/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
const getMinSwaps = function (num, k) {
  let digits = [...num];
  const findNext = num => {
    let i = num.length - 2;
    while (num[i] >= num[i + 1]) {
      i -= 1;
    }
    let j = num.length - 1;
    while (num[j] <= num[i]) {
      j -= 1;
    }
    [num[i], num[j]] = [num[j], num[i]];
    return [...num.slice(0, i + 1), ...num.slice(i + 1).reverse()];
  };
  for (let i = 0; i < k; i += 1) {
    digits = findNext(digits);
  }
  let ans = 0;
  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] !== num[i]) {
      let j = i + 1;
      while (num[i] !== digits[j]) {
        j += 1;
      }
      ans += j - i;
      while (j > i) {
        [digits[j], digits[j - 1]] = [digits[j - 1], digits[j]];
        j -= 1;
      }
    }
  }
  return ans;
};
