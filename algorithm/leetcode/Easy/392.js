/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let sInd = 0;
  let tInd = 0;
  while (sInd < s.length && tInd < t.length) {
    if (s[sInd] === t[tInd]) {
      sInd += 1;
    }
    tInd += 1;
  }

  return sInd === s.length;
};
