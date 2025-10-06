const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const [S, C] = input[idx++].split(' ').map(Number);
	const arr = input.slice(idx).map(Number);
	return { C, arr };
}

function solve({ C, arr }) {
	let l = 0;
	let r = 1_000_000_001;

	while (l + 1 < r) {
		const mid = Math.floor(l + (r - l) / 2);

		let sum = 0;
		for (const cur of arr) {
			sum += Math.floor(cur / mid);
		}

		if (sum >= C) {
			l = mid;
		} else {
			r = mid;
		}
	}

	return (
		arr.reduce((prev, cur) => prev + BigInt(cur), 0n) -
		BigInt(r - 1) * BigInt(C)
	).toString();
}

console.log(solution());
