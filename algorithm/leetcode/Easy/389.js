/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    return String.fromCharCode([...s, ...t].map(ch=>ch.charCodeAt(0)).reduce((acc, cur)=>acc ^ cur, 0));
};