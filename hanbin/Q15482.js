const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const arr = input.map((x) => x.trim());
	return arr;
}

function solve(arr) {
	const [A, B] = arr;

	const dp = Array(B.length + 1)
		.fill()
		.map(() => Array(A.length + 1).fill(0));

	let max = 0;

	for (let i = 0; i < B.length; i++) {
		for (let j = 0; j < A.length; j++) {
			if (A[j] === B[i]) {
				dp[i + 1][j + 1] = dp[i][j] + 1;
			} else {
				dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
			}

			max = Math.max(max, dp[i + 1][j + 1]);
		}
	}

	return max;
}

console.log(solution());
