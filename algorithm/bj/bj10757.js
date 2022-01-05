const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(num=>num.split('').map(val=>Number(val)).reverse());

const [longNum, shortNum] = A.length < B.length ? [B, A] : [A, B];

const ans = Array();
let carry = 0;
for (let i = 0; i < longNum.length; i++) {
    const sum = longNum[i] + (shortNum[i] || 0) + carry;
    ans[i] = sum < 10 ? sum : sum - 10;
    carry = sum < 10 ? 0 : 1;
}
if (carry === 1)
    ans.push(1);
console.log(ans.reverse().join(''));