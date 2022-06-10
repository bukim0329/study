/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    digits[i] += 1;
    if (digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  return [1, ...digits];
};
