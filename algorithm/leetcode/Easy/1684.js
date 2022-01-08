/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let ans = 0;
    allowed.split('').forEach(val=>{
        words = words.map(word=>word.split(val).join(''));
    });
    words.forEach(val=>val === '' ? ans++ : ans);
    return ans;
};