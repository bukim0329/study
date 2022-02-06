/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
  let fInd = 0;
  let sInd = 0;
  const ans = [];
  while (fInd < firstList.length && sInd < secondList.length) {
    const maxStart = Math.max(firstList[fInd][0], secondList[sInd][0]);
    const minEnd = Math.min(firstList[fInd][1], secondList[sInd][1]);
    if (maxStart <= minEnd) {
      ans.push([maxStart, minEnd]);
    }
    firstList[fInd][1] > secondList[sInd][1] ? (sInd += 1) : (fInd += 1);
  }

  return ans;
};
