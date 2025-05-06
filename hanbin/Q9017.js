const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const T = Number(input[idx++]);
	const answer = [];

	for (let tc = 0; tc < T; tc++) {
		const N = Number(input[idx++]);
		const teamNumbers = input[idx++].split(' ').map(Number);

		// 유효한 팀 선별
		const playerCount = Array(Math.max(...teamNumbers) + 1).fill(0);
		const validTeam = new Map();

		for (const teamNumber of teamNumbers) {
			playerCount[teamNumber]++;

			if (playerCount[teamNumber] === 6) {
				validTeam.set(teamNumber, []);
			}
		}

		let score = 1;
		for (let teamNumber of teamNumbers) {
			const array = validTeam.get(teamNumber);

			if (array) {
				array.push(score++);
			}
		}

		const sum = new Map();

		for (let key of validTeam.keys()) {
			const arr = validTeam.get(key);

			for (let i = 1; i < 4; i++) {
				arr[i] = arr[i - 1] + arr[i];
			}

			validTeam.set(key, arr);
		}

		let maxScore = Number.MAX_SAFE_INTEGER;
		let maxScoreTeams = new Set();

		outer: for (let i = 3; i < 6; i++) {
			for (let key of validTeam.keys()) {
				const score = validTeam.get(key)[i];

				if (score < maxScore) {
					maxScore = score;
					maxScoreTeams = new Set([key]);
				} else if (score === maxScore) {
					maxScoreTeams.add(key);
				}
			}

			if (maxScoreTeams.size === 1) {
				answer.push(maxScoreTeams.values().next().value);
				break outer;
			}

			maxScore = Number.MAX_SAFE_INTEGER;
			for (let key of validTeam.keys()) {
				if (!maxScoreTeams.has(key)) {
					validTeam.delete(key);
				}
			}
			maxScoreTeams = new Set();
		}
	}
	return answer.join('\n');
}

console.log(solution());
