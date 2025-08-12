const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0];
let index = 1;

for (let t = 0; t < T; t++) {
	const k = input[index++];
	const n = input[index++];

	const apt = [];
	for (let floor = 0; floor <= k; floor++) {
		const row = [];
		for (let room = 0; room <= n; room++) {
			row.push(0);
		}
		apt.push(row);
	}

	for (let room = 1; room <= n; room++) {
		apt[0][room] = room;
	}

	for (let floor = 1; floor <= k; floor++) {
		for (let room = 1; room <= n; room++) {
			apt[floor][room] = apt[floor][room - 1] + apt[floor - 1][room];
		}
	}

	console.log(apt[k][n]);
}
