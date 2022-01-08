/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let r = 0, l = 0, ans = 0;
    s.split('').forEach(val=>{
        val === 'R' ? r++ : l++;
        if (r === l)
            ans++;
    })
    return ans;
};