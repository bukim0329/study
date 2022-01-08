/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    return [...s].reduce((acc, cur, ind, arr)=>{
        ind % 2 === 0 ? acc.push(cur) : acc.push(String.fromCharCode(arr[ind - 1].charCodeAt(0) + Number(cur)));
        return acc;
    }, []).join('');
};