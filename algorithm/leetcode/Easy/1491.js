/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    return (salary.reduce((acc, cur)=>acc + cur, 0) - Math.min(...salary) - Math.max(...salary)) / (salary.length - 2);
};