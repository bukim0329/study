/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    return Array.from(Array(n), (_, ind)=>{
        if ((ind + 1) % 3 !== 0 && (ind + 1) % 5 !== 0)
            return String(ind + 1);
        let ans = '';
        if ((ind + 1) % 3 === 0)
            ans += 'Fizz';
        if ((ind + 1) % 5 === 0)
            ans += 'Buzz';
        return ans;
    });
};