/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles;
    while (numBottles >= numExchange) {
        const newBottle = Math.floor(numBottles / numExchange);
        ans += newBottle;
        numBottles = numBottles % numExchange + newBottle;
    }
    return ans;
};