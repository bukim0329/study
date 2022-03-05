/**
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function (box) {
  const stackSort = arr =>
    arr
      .join('')
      .split('*')
      .map(elem =>
        elem
          .split('')
          .sort((a, b) => (a !== b && b === '.' ? 1 : -1))
          .join('')
      )
      .join('*')
      .split('');
  const ans = [];
  box.forEach(arr => {
    ans.push(stackSort(arr));
  });

  return ans[0].map((_, row) => ans.map((arr, col) => ans[ans.length - col - 1][row]));
};
