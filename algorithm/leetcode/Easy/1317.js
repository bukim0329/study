/**
 * @param {number} n
 * @return {number[]}
 */
 var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i += 1) {    
        if (!String(i).match(/0/) && !String(n - i).match(/0/))
            return [i, n - i];
    }
};