/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let zero = 0;
  let one = 0;
  let two = 0;

  nums.forEach(val => {
    if (val === 0) zero++;
    if (val === 1) one++;
    if (val === 2) two++;
  });

  nums.length = 0;

  nums.push(...('0'.repeat(zero) + '1'.repeat(one) + '2'.repeat(two)).split(''));
};
