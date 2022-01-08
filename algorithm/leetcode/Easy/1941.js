/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    const obj = {};
    s.split('').forEach(val=>{
        obj[val] ? obj[val]++ : obj[val] = 1;
    });
    const values = Object.values(obj);
    for (let i = 1; i < values.length; i++) {
        if (values[i] !== values[i - 1])
            return false;
    }
    return true;
};