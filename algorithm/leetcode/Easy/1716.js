/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    let day = 1, week = 1, ans = 0;
    for (let i = 0; i < n; i++) {
        if (i >= week * 7) {
            week += 1;
            day = week;
        }
        ans += day;
        day += 1;
    }
    return ans;
};