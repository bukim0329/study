/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let ans = 0;
    grid.forEach((arr, row)=>{
        arr.forEach((val, col)=>{
            if (grid[row][col] === 1) {
                if (row === 0 || grid[row - 1][col] === 0)
                    ans++;
                if (row === grid.length - 1 || grid[row + 1][col] === 0)
                    ans++;
                if (col === 0 || grid[row][col - 1] === 0)
                    ans++;
                if (col === grid[0].length - 1 || grid[row][col + 1] === 0)
                    ans++;
            }
        });
    });
    return ans;
};