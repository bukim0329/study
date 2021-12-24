/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    const w1 = word1.split('');
    const w2 = word2.split('');
    const ans = Array();
    let i = 0;
    while (w1.length > i && w2.length > i) {
        ans.push(w1[i]);
        ans.push(w2[i]);
        i++;
    }
    return w1.length > i ? [...ans, ...w1.slice(i)].join('') : [...ans, ...w2.slice(i)].join('');
};