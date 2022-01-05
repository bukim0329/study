/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const hash = Object();
    const ans = Array();
    s1.split(' ').forEach(val=>hash[val] ? hash[val] += 1 : hash[val] = 1);
    s2.split(' ').forEach(val=>hash[val] ? hash[val] += 1 : hash[val] = 1);
    for (const key of Object.entries(hash)) {
        if (key[1] === 1)
            ans.push(key[0]);
    }
    return ans;
};