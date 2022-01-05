const fs = require('fs');
const [color1, color2, color3] = fs.readFileSync('/dev/stdin').toString().split('\n');
const table = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
}
const ans = Array(table[color3]).fill(0);
ans.unshift(table[color2]);
ans.unshift(table[color1]);
console.log(Number(ans.join('')));