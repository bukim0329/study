/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
  let open = 0;
  let close = 0;
  for (const pt of s) {
    if (pt === ')' && open > 0) {
      open -= 1;
    } else {
      pt === '(' ? (open += 1) : (close += 1);
    }
  }
  return open + close;
};
