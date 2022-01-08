/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 function isSDN(val) {
    const arr = String(val).split('');
    for (let i = 0; i < arr.length; i++) {
        if (val % Number(arr[i]) !== 0)
            return false;
    }
    return true;
}

var selfDividingNumbers = function(left, right) {
    return Array.from(Array(right - left + 1), (val, ind)=>left + ind).filter(val=>isSDN(val) ? true : false);
};