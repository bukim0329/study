/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestSubstring = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const map = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  const seen = new Map();
  let status = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) status ^= map[s[i]];
    if (!status) maxLen = i + 1;
    else if (seen.has(status)) maxLen = Math.max(maxLen, i - seen.get(status));
    else seen.set(status, i);
  }
  return maxLen;
};
