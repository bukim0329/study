/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    return sentences.reduce((max, cur)=>{
        const len = cur.split(' ').length;
        return max > len ? max : len;
    }, 0);
};