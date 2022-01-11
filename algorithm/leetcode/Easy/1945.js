/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let conv = s.split('').map((val, ind)=>{
        return char.indexOf(val) + 1;
    }).join('');
    for (let i = 0; i < k; i++) {
        conv = String(conv).split('').reduce((acc, cur)=>Number(acc) + Number(cur), 0);
    }
    return conv;
};