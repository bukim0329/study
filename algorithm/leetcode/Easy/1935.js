/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    return text.split(' ').reduce((acc, cur)=>{
        return Array
            .from(brokenLetters)
            .reduce((a, c)=>cur.includes(c) ? a + 1 : a, 0) > 0 ? acc : acc + 1;
    }, 0)
};