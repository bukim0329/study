/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    return patterns.reduce((ans, pattern)=>{
        return word.includes(pattern) ? ans + 1 : ans;
    }, 0);
};