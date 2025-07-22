const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.result;
}

function init() {
	let idx = 0;
	const [N, M] = input[idx++].split(' ').map(Number);
	const array = input.slice(idx).map((x) => x.split(' ').map(Number));

	init.export = { N, M, array };
}

function solve({ N, M, array }) {
	let result = 0;

	// from left
	for (let i = 0; i < N; i++) {
		let prev = 0;
		for (let j = 0; j < M; j++) {
			const cur = array[i][j];

			if (prev < cur) {
				result += cur - prev;
			}
			prev = cur;
		}
	}

	// from right
	for (let i = N - 1; i >= 0; i--) {
		let prev = 0;
		for (let j = 0; j < M; j++) {
			const cur = array[i][j];

			if (prev < cur) {
				result += cur - prev;
			}
			prev = cur;
		}
	}

	// from top
	for (let j = 0; j < M; j++) {
		let prev = 0;
		for (let i = 0; i < N; i++) {
			const cur = array[i][j];

			if (prev < cur) {
				result += cur - prev;
			}
			prev = cur;
		}
	}

	// from bottom
	for (let j = 0; j < M; j++) {
		let prev = 0;
		for (let i = N - 1; i >= 0; i--) {
			const cur = array[i][j];

			if (prev < cur) {
				result += cur - prev;
			}
			prev = cur;
		}
	}

	result += N * M * 2;

	solve.export = { result };
}

console.log(solution());
