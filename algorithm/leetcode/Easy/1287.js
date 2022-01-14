/**
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + Math.floor(arr.length/4)]) return arr[i]
    }
};