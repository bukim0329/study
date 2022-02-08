/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function (rating) {
  let ans = 0;
  for (let i = 1; i < rating.length; i += 1) {
    let leftAsc = 0;
    let leftDsc = 0;
    let rightAsc = 0;
    let rightDsc = 0;
    for (let j = 0; j < i; j += 1) {
      if (rating[j] < rating[i]) {
        leftAsc += 1;
      } else {
        leftDsc += 1;
      }
    }
    for (let j = i + 1; j < rating.length; j += 1) {
      if (rating[i] < rating[j]) {
        rightAsc += 1;
      } else {
        rightDsc += 1;
      }
    }
    ans += leftAsc * rightAsc;
    ans += leftDsc * rightDsc;
  }

  return ans;
};
