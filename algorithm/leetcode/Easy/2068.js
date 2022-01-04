/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var checkAlmostEquivalent = function(word1, word2) {
    const obj1 = Object(); 
    const obj2 = Object();
    word1.split('').forEach(val=>obj1[val] ? obj1[val] += 1 : obj1[val] = 1);
    word2.split('').forEach(val=>obj2[val] ? obj2[val] += 1 : obj2[val] = 1);
    const tmp = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    for (const elem of tmp) {
        if (Math.abs((obj1[elem] || 0) - (obj2[elem] || 0)) > 3)
            return false;
    }
    return true;
};