/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function(s) {
  if (s.length === 1) {
    if (s.match(/[0-9]/)) {
      return [s];
    } 
      return [s.toLowerCase(), s.toUpperCase()];
    
  }
  if (s[0].match(/[0-9]/)) {
    return letterCasePermutation(s.slice(1)).map(val=>s[0] + val);
  } 
    const ans = [];
    letterCasePermutation(s.slice(1)).forEach(val=>{
      ans.push(s[0].toLowerCase() + val);
      ans.push(s[0].toUpperCase() + val);
    });
    return ans;
};