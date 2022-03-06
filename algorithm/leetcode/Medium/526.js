/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = function (n) {
  let ans = 0;
  const cntBeauty = (arr, ind) => {
    if (arr.length === 0) {
      ans += 1;
      return;
    }
    for (let i = 0; i < arr.length; i += 1) {
      const fixed = arr[i];
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      if (ind % fixed === 0 || fixed % ind === 0) {
        cntBeauty(rest, ind + 1);
      }
    }
  };
  cntBeauty(
    Array.from({ length: n }, (_, ind) => ind + 1),
    1
  );

  return ans;
};
