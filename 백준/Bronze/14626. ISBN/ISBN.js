const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = 0;
let x = '';

for (let index = 0; index < input.length; index++) {
    const element = input[index];

    if (index % 2 !== 0) {  // 홀수 인덱스 → ×3
        if (element === '*') {
            x = '3x';
            continue;
        }
        num = num + Number(element) * 3;
    } else {                // 짝수 인덱스 → ×1
        if (element === '*') {
            x = '1x';
            continue;
        }
        num = num + Number(element) * 1;
    }
}

for (let i = 0; i <= 9; i++) {
    if (x === '3x') {
        if ((num + 3 * i) % 10 === 0) {
            console.log(i);
            break;
        }
    } else {
        if ((num + i) % 10 === 0) {
            console.log(i);
            break;
        }
    }
}
