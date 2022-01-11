/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    while (k--) { 
        for (let i = 0; i < grid.length; i++) {
            (grid[i + 1] || grid[0]).unshift(grid[i].pop());
        }
    }
    return grid;
};