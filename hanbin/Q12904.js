const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const start = input[idx++].trim();
	let end = input[idx++].trim();

	String.prototype.reverse = function reverse() {
		let result = '';

		for (let i = this.length - 1; i >= 0; i--) {
			result += this[i];
		}

		return result;
	};

	while (start.length !== end.length) {
		const lastWord = end[end.length - 1];

		end = end.slice(0, end.length - 1);

		if (lastWord === 'B') {
			end = end.reverse();
		}
	}

	return start === end ? 1 : 0;
}

console.log(solution());
