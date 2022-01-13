/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    const hash = Object();
    words.forEach(word=>{
        word.split('').forEach(ch=>hash[ch] ? hash[ch] += 1 : hash[ch] = 1);
    });
    return Object.values(hash).every(val=>val % words.length === 0);
};