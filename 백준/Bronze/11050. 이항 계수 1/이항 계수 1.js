const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const nums = input.map(Number);

function nCk(n, k) {
	if (k === 0 || k === n) return 1;

	k = Math.min(k, n - k);

	let result = 1;
	for (let i = 1; i <= k; i++) {
		result = (result * (n - k + i)) / i;
	}

	return Math.round(result);
}

console.log(nCk(nums[0], nums[1]));
