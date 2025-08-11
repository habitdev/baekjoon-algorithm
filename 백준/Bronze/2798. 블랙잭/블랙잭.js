const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, limit] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

function cardSum(count, limit, cards) {
	let best = 0;

	for (let i = 0; i < count - 2; i++) {
		for (let j = i + 1; j < count - 1; j++) {
			for (let k = j + 1; k < count; k++) {
				const sum = cards[i] + cards[j] + cards[k];

				if (sum <= limit && sum > best) {
					best = sum; 
				}
			}
		}
	}

	console.log(best);
}

cardSum(count, limit, cards);
