/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    const arr = number.split('-').join('').split(' ').join('').split('');
    let ans = '';
    while (arr.length) {
        if (arr.length < 4)
            ans += arr.splice(0).join('');
        else if (arr.length === 4)
            ans += arr.splice(0, 2).join('') + '-' + arr.splice(0, 2).join('');
        else {
            ans += arr.splice(0, 3).join('');
            ans += '-';
        }
    }
    return ans;
};