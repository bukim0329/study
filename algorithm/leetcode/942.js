/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let inc = 0;
    let dec = s.length;
    return [...s.split('').map((val)=>{
        return val === 'I' ? inc++ : dec--;
    }), inc];
};