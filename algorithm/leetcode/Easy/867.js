/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    return matrix[0].map((_, ind)=>matrix.map(arr=>arr[ind]));
};