/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
 var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    //처음에 풀었던 풀이
    /*
    const queue = [[rCenter, cCenter]];
    const flag = Array.from(Array(rows), ()=>new Array(cols).fill(0));
    const udlr = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const ans = Array();
    while (queue.length) {
        const [tmp1, tmp2] = queue.shift();
        if (flag[tmp1][tmp2] === 0) {
            flag[tmp1][tmp2] = 1;
            for (let i = 0; i < 4; i++) {
                if (tmp1 + udlr[i][0] >= 0 && tmp1 + udlr[i][0] < rows && flag[tmp1 + udlr[i][0]][tmp2 + udlr[i][1]] === 0)
                    queue.push([tmp1 + udlr[i][0], tmp2 + udlr[i][1]]);
            }
            ans.push([tmp1, tmp2]);
        }
    }
    return ans;
    */
    //짧은 풀이
    const ans = Array();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ans.push([i, j]);
        }
    }
    return ans.sort((a, b)=>Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter));
};