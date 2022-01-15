/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    const stack = [[sr, sc]];
    while (stack.length) {
        const [r, c] = stack.pop();
        image[r][c] = newColor;
        if (r + 1 < image.length && image[r + 1][c] !== newColor && image[r + 1][c] === color)
            stack.push([r + 1, c])
        if (r > 0 && image[r - 1][c] !== newColor && image[r - 1][c] === color)
            stack.push([r - 1, c])
        if (c + 1 < image[0].length && image[r][c + 1] !== newColor && image[r][c + 1] === color)
            stack.push([r, c + 1])
        if (c > 0 && image[r][c - 1] !== newColor && image[r][c - 1] === color)
            stack.push([r, c - 1])
    }
    return image;
};