const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]); 
const str = input[1]; 
const MOD = 1234567891n;
let sum = 0n;
let pow = 1n;

for (let index = 0; index < str.length; index++) {
  const num = BigInt(str.charCodeAt(index) - 96);
  sum = (sum + (num * pow) % MOD) % MOD;
  pow = (pow * 31n) % MOD;
}

console.log(sum.toString());