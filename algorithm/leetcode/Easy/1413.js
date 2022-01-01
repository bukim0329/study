/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let min = Infinity;
    nums.reduce((acc, cur)=>{
        if (min > acc + cur)
            min = acc + cur;
        return acc + cur;
    }, 0);
    return min < 0 ? min * -1 + 1 : 1;
};