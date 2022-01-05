const fs = require('fs');
let [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>Number(val));

let water = 1;
let ans = 0;
while (N.toString(2).match(/[1]/g).length > K) {
    if (N % 2 !== 0) {
        N += 1;
        ans += water;
    }
    else {
        N /= 2;
        water *= 2;
    }
}
console.log(ans);