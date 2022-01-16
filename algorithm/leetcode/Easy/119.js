/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  const triangle = Array.from(Array(rowIndex + 1), (_, row)=>Array(row + 1));
  for (let i = 0; i <= rowIndex; i += 1) {
      for (let j = 0; j <= i; j += 1) {
          if (j === 0 || i === j) {
              triangle[i][j] = 1;
          } else {
              triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
          }
      }
  }
  
  return triangle[rowIndex];
};