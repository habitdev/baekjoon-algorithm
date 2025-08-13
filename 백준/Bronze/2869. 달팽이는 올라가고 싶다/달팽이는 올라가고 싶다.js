const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

const days = Math.ceil((V - B) / (A - B));
console.log(days);

/* 

1. 낮: +A 만큼 올라감
2. 밤: -B 만큼 내려감 (단, 도착한 날은 밤 없음)
3. 마지막 날에는 밤에 안 내려감

목표 높이 V에 도착하는 날은 낮에 +A를 한 직후
즉, 그 전날 밤까지는 꼭대기 V에서 B 만큼 모자라게 올라오면 된다.

전날 밤 위치가 V - B 이상이면, 다음 날 낮에 +A 해서 무조건 도착.

*/