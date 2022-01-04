/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    function canForm(word, chars) {
        const tmp = chars.split('');
        return word.split('').every(val=>{
            if (tmp.includes(val)) {
                tmp.splice(tmp.indexOf(val), 1);
                return true;
            }
            return false;
        });
    }
    return words.reduce((acc, word)=>{
        return canForm(word, chars) ? acc + word.length : acc;
    }, 0);
};