/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let ans = 0;
    let tmp = 0;
    boxTypes.sort((a, b)=>b[1] - a[1]);
    for (let i = 0; i < boxTypes.length; i++) {
        ans += tmp + boxTypes[i][0] < truckSize ? boxTypes[i][0] * boxTypes[i][1] : (truckSize - tmp) * boxTypes[i][1];
        tmp += boxTypes[i][0];
        if (tmp >= truckSize)
            return ans;
    }
    return ans;
};