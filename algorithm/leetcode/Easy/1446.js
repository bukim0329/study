/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let ans = 0;
    s.split('').reduce((acc, ch, ind, str)=>{
        if (ch === str[ind + 1]) {
            return acc + 1;
        } else {
            ans = ans < acc ? acc : ans;
            return 1;
        }
    }, 1);
    return ans;
};