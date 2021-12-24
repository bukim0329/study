/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    return Array
        .from(Array(n + 1),(_, ind)=>ind
              .toString(2)
              .split('')
              .reduce((acc, cur)=>acc + Number(cur), 0));
};