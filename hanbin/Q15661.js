const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input.slice(idx).map((x) => x.trim().split(' ').map(Number));

	const selected = 1 << (N + 1);

	return select(selected, 0, 0, N, arr, 0, 0);
}

function select(selected, num, depth, N, arr, s, us) {
	if (num === N && s >= 1 && s !== N) {
		return calc(selected, arr);
	}

	let result = Number.MAX_SAFE_INTEGER;

	for (let i = num; i < N; i++) {
		result = Math.min(
			result,
			select(selected | (1 << i), i + 1, depth + 1, N, arr, s + 1, us)
		);

		if (result === 0) return result;
	}

	return result;
}

function calc(selected, arr) {
	const selectedTeamScore = { score: 0 };
	const unselectedTeamScore = { score: 0 };

	for (let i = 0; i < arr.length; i++) {
		let target = selectedTeamScore;
		if ((selected & (1 << i)) === 0) {
			target = unselectedTeamScore;
		}

		for (let j = 0; j < arr[i].length; j++) {
			if (checkSameTeam(selected, i, j)) {
				target.score += arr[i][j];
			}
		}
	}

	const result = Math.abs(
		selectedTeamScore.score - unselectedTeamScore.score
	);

	return result;
}

function checkSameTeam(selected, i, j) {
	const a = selected & (1 << i);
	const b = selected & (1 << j);

	if (a === 0 && b === 0) return true;
	else if (a > 0 && b > 0) return true;
	else return false;
}

console.log(solution());
