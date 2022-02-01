/**
 * @param {number} n
 * @return {number}
 */
/* backtracking */
// const countVowelStrings = function (n) {
//   const backtracking = (str, n) => {
//     if (n === 1) {
//       return str.length;
//     }
//     let ret = 0;
//     for (let i = 0; i < str.length; i += 1) {
//       ret += backtracking(str.slice(i), n - 1);
//     }
//     return ret;
//   };
//   return backtracking('aeiou', n);
// };

/* DP */
/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  const table = [[1, 2, 3, 4, 5]];
  for (let i = 1; i < n; i += 1) {
    table[i] = [1];
    for (let j = 1; j < 5; j += 1) {
      table[i][j] = table[i][j - 1] + table[i - 1][j];
    }
  }
  return table[n - 1][4];
};
