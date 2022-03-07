/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  const ans = Array.from({ length: n }, () => 'a');
  let ind = 0;
  k -= n;
  while (k > 24) {
    ans[ind] = 'z';
    ind += 1;
    k -= 25;
  }
  if (k > 0) {
    ans[ind] = String.fromCharCode('a'.charCodeAt(0) + k);
  }

  return ans.reverse().join('');
};
