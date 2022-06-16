/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  const dp = [];
  const stack = [0];
  const visited = Array.from({ length: nums.length }, () => false);

  nums.forEach((val, ind) => {
    dp[ind] = ind + nums[ind] >= nums.length - 1;
  });

  while (stack.length > 0) {
    const ind = stack.pop();
    visited[ind] = true;
    for (let i = ind; i <= ind + nums[ind]; i += 1) {
      if (!visited[i]) stack.push(i);
      if (dp[i]) return true;
    }
  }
  return false;
};
