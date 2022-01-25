/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function (tickets, k) {
  return (
    tickets.reduce((acc, cur) => acc + (cur > tickets[k] - 1 ? tickets[k] - 1 : cur), 0) +
    tickets.filter((val, ind) => val >= tickets[k] && ind <= k).length
  );
};
