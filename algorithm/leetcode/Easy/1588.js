/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        let tmp = 0;
        for (let j = i; j < arr.length; j += 2) {
            tmp += arr.slice(i, j + 1).reduce((acc, cur)=>acc + cur, 0);
        }
        ans += tmp;
    }
    return ans;
};