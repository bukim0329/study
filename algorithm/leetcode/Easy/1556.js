/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
    const stack = String(n).split('');
    const ans = Array();
    for (let i = 0; i < String(n).length; i += 1) {
        ans.push(stack.pop());
        if (i % 3 === 2 && i !== String(n).length - 1)
            ans.push('.');
    }
    return ans.reverse().join('');
};