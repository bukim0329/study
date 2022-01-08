/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    return Array.from(Array(n - 1), (_, i)=>(i + 1) * 2 + start).reduce((acc, cur)=>acc ^ cur, start);
};