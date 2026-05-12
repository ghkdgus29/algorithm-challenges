function solution(land) {
	var answer = 0;

	const dp = Array(land.length)
		.fill()
		.map(() => Array(4).fill(0));

	for (let i = 0; i < 4; i++) {
		dp[0][i] = land[0][i];
	}

	for (let i = 1; i < land.length; i++) {
		for (let j = 0; j < 4; j++) {
			let max = 0;
			for (let k = 0; k < 4; k++) {
				if (j === k) continue;
				max = Math.max(dp[i - 1][k], max);
			}
			dp[i][j] = max += land[i][j];

			answer = Math.max(answer, dp[i][j]);
		}
	}

	return answer;
}
