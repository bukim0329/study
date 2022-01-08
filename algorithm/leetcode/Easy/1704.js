/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    return (s.slice(0, s.length / 2).match(/[aeiouAEIOU]/g) || []).length === (s.slice(s.length / 2).match(/[aeiouAEIOU]/g) || []).length;
};