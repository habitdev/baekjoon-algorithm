const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let index = 0; index < input.length; index++) {
	const element = input[index];
	let half = '';
	let front = '';
	let back = '';
	let compare = '';

	if (Number(element) === 0) {
		return;
	}

	if (element.length % 2) {
		half = element.slice(0, element.length / 2 + 1);
		front = element.slice(0, element.length / 2);
		back = front.split('').reverse().join('');
	} else {
		front = element.slice(0, element.length / 2);
		back = front.split('').reverse().join('');
	}

	if (half !== '') {
		compare = half + back;
	} else {
		compare = front + back;
	}

  console.log(compare === element ? 'yes' : 'no');
}
