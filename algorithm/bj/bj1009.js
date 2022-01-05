const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = input[0];

for (let t = 0; t < T; t++) {
    const [a, b] = input[t + 1].split(' ');
    const arr = Array();
    let i = 0;
    while (++i) {
        const tmp = a ** i % 10;
        if (arr.includes(tmp))
            break;
        arr.push(tmp);
    }
    console.log(arr[b % arr.length - 1] || arr[arr.length - 1] || 10);
}