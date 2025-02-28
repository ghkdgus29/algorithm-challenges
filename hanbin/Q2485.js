const input = require('fs')
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n');

function solution() {
	const N = Number(input[0]);
	const arr = input.slice(1).map(Number);

	let gap = 0;
	for (let i = 1; i < N; i++) {
		const diff = arr[i] - arr[i - 1];

		const greater = Math.max(gap, diff);
		const less = Math.min(gap, diff);

		if (greater % less !== 0) {
			gap = GCD(greater, less);
		}
	}

	return Math.floor((arr[N - 1] - arr[0]) / gap) - (N - 1);
}

function GCD(a, b) {
	if (b === 0) return a;
	return GCD(b, a % b);
}

console.log(solution());

// O(NlogM); N = for문; logM = GCD;
// 유클리드호제법
