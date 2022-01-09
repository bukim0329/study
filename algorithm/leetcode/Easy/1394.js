/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    const freq = Object();
    arr.forEach(val=>{
        freq[val] ? freq[val] += 1 : freq[val] = 1;
    });
    return Object.entries(freq).reduce((max, cur)=>{
        if (Number(cur[0]) === Number(cur[1]) && Number(max) < Number(cur[0]))
            return cur[0];
        return max;
    }, -1);
};