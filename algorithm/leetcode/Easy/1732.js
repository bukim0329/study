/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    return Math.max(...gain.reduce((arr, cur, ind)=>{
        arr.push(arr[ind] + cur);
        return arr;
    }, [0]));
};