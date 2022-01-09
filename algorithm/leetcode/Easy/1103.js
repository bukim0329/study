/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
    const ans = Array(num_people).fill(0);
    for (let i = 1; candies > 0; i++) {
        ans[(i - 1) % num_people] += i < candies ? i : candies;
        candies -= i;
    }
    return ans;
};