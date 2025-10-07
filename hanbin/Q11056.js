const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const arr = input.map((x) => x.trim());
	return arr;
}

function solve([A, B]) {
	const dp = Array(A.length + 1)
		.fill()
		.map(() => Array(B.length + 1).fill(0));

	let max = 0;

	for (let i = 0; i < B.length; i++) {
		for (let j = 0; j < A.length; j++) {
			const [c, r] = [i + 1, j + 1];

			if (B[i] === A[j]) {
				dp[r][c] = dp[r - 1][c - 1] + 1;
			} else {
				dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
			}

			max = Math.max(max, dp[r][c]);
		}
	}

	return A.length + B.length - max;
}

console.log(solution());
