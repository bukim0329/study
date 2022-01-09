/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    const ans = Array();
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j]))
                ans.push(words[j]);
            else if (words[j].includes(words[i]))
                ans.push(words[i]);
        }
    }
    return ([...new Set(ans)]);
};