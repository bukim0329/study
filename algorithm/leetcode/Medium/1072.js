/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = matrix => {
  const map = new Map();

  matrix.forEach(col => {
    let t1 = '';
    let t2 = '';
    col.forEach(val => {
      t1 += val === 0 ? '1' : '0';
      t2 += val === 0 ? '0' : '1';
    });
    map.set(t1, (map.get(t1) || 0) + 1);
    map.set(t2, (map.get(t2) || 0) + 1);
  });

  return Math.max(...map.values());
};
