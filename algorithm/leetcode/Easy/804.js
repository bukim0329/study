/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const MORS = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    return [...new Set(words.map(val=>{
        return val.split('').map(word=>{
            return MORS[word.charCodeAt(0) - 'a'.charCodeAt(0)];
        }).join('');
    }))].length;
};