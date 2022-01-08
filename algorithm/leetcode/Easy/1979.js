/**
 * @param {number[]} nums
 * @return {number}
 */
 const gcd = (a, b)=> b === 0 ? a : gcd(b, a % b);
 var findGCD = function(nums) {
     const [num1, num2] = [Math.max(...nums), Math.min(...nums)];
     return gcd(num1, num2);
 };