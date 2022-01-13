/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 var fairCandySwap = function(aliceSizes, bobSizes) {
    const diff = (aliceSizes.reduce((acc, cur)=>acc + cur, 0) - bobSizes.reduce((acc, cur)=>acc + cur, 0)) / 2;
    const setAlice = new Set(aliceSizes);
    for (let i = 0; i < bobSizes.length; i++) {
        if (setAlice.has(bobSizes[i] + diff))
            return [bobSizes[i] + diff, bobSizes[i]];
    }
};