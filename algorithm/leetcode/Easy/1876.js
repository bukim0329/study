/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    return s.split('').reduce((acc, _, ind, arr)=>{
        if (ind < arr.length - 2 && arr[ind] !== arr[ind + 1] && arr[ind + 1] !== arr[ind + 2] && arr[ind + 2] !== arr[ind])
            return acc + 1;
        return acc;
    }, 0);
};