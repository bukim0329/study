/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    const res = Array();
    for (const ch of words[0]) {
        if (words.every(word=>word.indexOf(ch) > -1))
            res.push(ch);
        words = words.map(word=>word.replace(ch, ""));
    }
    return res;
};