/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const isAna = (str1, str2) => {
    const ascii = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < str1.length; i += 1) {
      ascii[str1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }
    for (let i = 0; i < str2.length; i += 1) {
      ascii[str2.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
    }
    return ascii.every(val => val === 0);
  };
  const ans = [];
  for (let i = 0; i < s.length - p.length + 1; i += 1) {
    if (isAna(s.slice(i, i + p.length), p)) ans.push(i);
  }

  return ans;
};
