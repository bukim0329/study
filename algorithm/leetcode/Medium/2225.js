/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function (matches) {
  const lost = {};
  for (const [winner, loser] of matches) {
    lost[winner] = lost[winner] || 0;
    lost[loser] = (lost[loser] || 0) + 1;
  }
  const res = [[], []];
  for (const player in lost) {
    if (lost[player] === 0) res[0].push(Number(player));
    else if (lost[player] === 1) res[1].push(Number(player));
  }
  return res;
};
