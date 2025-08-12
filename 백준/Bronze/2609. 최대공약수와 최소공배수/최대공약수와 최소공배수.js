const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const nums = input.map(Number);
function getMulties(num1, num2) {
	return (num1 * num2) / getDivs(num1, num2);
}
function getDivs(num1, num2) {
	while (num2 !== 0) {
		const remainder = num1 % num2;
		num1 = num2;
		num2 = remainder;
	}

	return num1;
}

console.log(getDivs(input[0], input[1]));
console.log(getMulties(input[0], input[1]));

