/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    return image
        .map(val=>val.reverse())
        .map(val=>val.map(v=>v === 1 ? 0 : 1));
};