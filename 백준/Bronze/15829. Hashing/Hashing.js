const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]); 
const str = input[1]; 

const alphabets = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


let sum = 0;
for (let index = 0; index < str.length; index++) {
	const element = str[index];
	const num = alphabets.indexOf(element);

	sum = sum + (num+1) * (Math.pow(31,index));
}

console.log(sum);