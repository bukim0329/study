/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
  let min = Infinity;
  const ans = [];
  list1.forEach((res, ind1) => {
    const ind2 = list2.indexOf(res);
    if (ind2 >= 0 && ind1 + ind2 === min) {
      ans.push(res);
    } else if (ind2 >= 0 && ind1 + ind2 < min) {
      min = ind1 + ind2;
      ans.pop();
      ans.push(res);
    }
  });

  return ans;
};
