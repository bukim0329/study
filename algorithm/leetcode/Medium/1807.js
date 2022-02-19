/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function (s, knowledge) {
  let ans = s;
  const map = new Map(knowledge);
  const words = s.match(/\([a-z]{0,}\)/g);
  if (words) {
    words.forEach(word => {
      ans = ans.replace(word, map.get(word.slice(1, -1)) || '?');
    });
  }

  return ans;
};
