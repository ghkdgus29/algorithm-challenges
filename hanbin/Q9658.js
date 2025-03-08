const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const N = Number(input[0]);

	const dp = Array(N + 1).fill(false);

	dp[2] = dp[4] = dp[5] = true;

	for (let i = 6; i <= N; i++) {
		if (!(dp[i - 1] && dp[i - 3] && dp[i - 4])) {
			dp[i] = true;
		}
	}

	return dp[N] ? 'SK' : 'CY';
}

console.log(solution());
