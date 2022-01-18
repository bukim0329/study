/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const sortedScore = [...score].sort((a, b) => b - a);
  return score.map(val => {
    const rank = sortedScore.indexOf(val) + 1;
    switch (rank) {
      case 1:
        return 'Gold Medal';

      case 2:
        return 'Silver Medal';

      case 3:
        return 'Bronze Medal';

      default:
        return String(rank);
    }
  });
};
