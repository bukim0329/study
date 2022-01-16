/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let ans = 0;
    for (let i = 0; i < timeSeries.length - 1; i += 1) {
        const diff = timeSeries[i + 1] - timeSeries[i];
        diff < duration
        ? ans += diff
        : ans += duration;
    }
    return ans + duration;
};