/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length > 0) {
    if (ans.length > 0) {
      ans.unshift(ans.pop());
    }
    ans.unshift(deck.pop());
  }

  return ans;
};
