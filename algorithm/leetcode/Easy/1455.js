/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    let ind = 1;
    for (const str of sentence.split(' ')) {
        if (str.startsWith(searchWord))
            return ind;
        ind += 1;
    }
    return -1;
};