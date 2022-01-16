/**
 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
  let ans = '';
  for (let i = 0; i < s.length; i += 1) {
      if (!(s[i] === s[i + 1] && s[i] === s[i + 2]))
          ans += s[i];
  }
  return ans;
};