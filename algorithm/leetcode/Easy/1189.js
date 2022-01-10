/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    const words = Object();
    text.split('').forEach(ch=>words[ch] ? words[ch] += 1 : words[ch] = 1);
    return Math.min(words['b'], words['a'], Math.floor(words['l'] / 2), Math.floor(words['o'] / 2), words['n']) || 0;
};