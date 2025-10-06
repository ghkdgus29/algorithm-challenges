const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const T = Number(input[idx++]);
	const quries = [];

	for (let i = 0; i < T; i++) {
		const [n, m] = input[idx++].split(' ').map(Number);
		const A = input[idx++].split(' ').map(Number);
		const B = input[idx++]
			.split(' ')
			.map(Number)
			.sort((a, b) => a - b);
		quries.push({ n, m, A, B });
	}

	return quries;
}

function solve(quries) {
	const answer = [];

	for (const { n, m, A, B } of quries) {
		const result = [];
		for (const num of A) {
			const index = find(num, B);

			if (B[index + 1] === undefined) {
				result.push(B[index]);
			} else {
				const a = Math.abs(num - B[index]);
				const b = Math.abs(num - B[index + 1]);

				if (a <= b) {
					result.push(B[index]);
				} else {
					result.push(B[index + 1]);
				}
			}
		}
		answer.push(result.reduce((prev, cur) => prev + cur, 0));
	}

	return answer.join('\n');

	function find(num, array) {
		let l = 0;
		let r = array.length;

		while (l + 1 < r) {
			const mid = Math.floor(l + (r - l) / 2);
			const current = array[mid];

			if (current <= num) {
				l = mid;
			} else {
				r = mid;
			}
		}

		return r - 1;
	}
}

console.log(solution());
