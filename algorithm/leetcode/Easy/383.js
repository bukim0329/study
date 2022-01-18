/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const num = [];
  magazine.split('').forEach(val => {
    num[val] ? (num[val] += 1) : (num[val] = 1);
  });
  ransomNote.split('').forEach(val => {
    num[val] ? (num[val] -= 1) : (num[val] = -1);
  });
  return Object.values(num).every(val => val >= 0);
};
