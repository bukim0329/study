/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
    return Array.from(Array(99), (_, ind)=>ind + 2).filter(num=>{
        for (let i = 2; i <= 10; i += 1) {
            if (num > i && num % i === 0)
                return false;
        }
        return true;
    }).map(val=>val ** 2).includes(n);
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
    const div = Array();
    for (let i = 1; i <= n; i += 1) {
        if (n % i === 0)
            div.push(i);
    }
    return div.length === 3;
};