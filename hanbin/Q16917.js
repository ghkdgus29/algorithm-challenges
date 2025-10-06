const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const [A, B, C, X, Y] = input[0].split(' ').map(Number);

	return { A, B, C, X, Y };
}

function solve({ A, B, C, X, Y }) {
	let max = Math.max(X, Y);
	let answer = Number.MAX_SAFE_INTEGER;

	for (let i = max; i >= 0; i--) {
		let result = i * C * 2;

		if (X - i > 0) {
			result += (X - i) * A;
		}
		if (Y - i > 0) {
			result += (Y - i) * B;
		}

		answer = Math.min(answer, result);
	}

	return answer;
}

console.log(solution());
