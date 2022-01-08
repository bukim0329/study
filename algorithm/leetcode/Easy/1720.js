/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    return encoded.reduce((acc, cur)=>{
        return [...acc, acc[acc.length - 1] ^ cur];
    }, [first])
};