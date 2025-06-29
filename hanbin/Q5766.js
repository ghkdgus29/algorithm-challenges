const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

Map.prototype.getOrZero = function getOrZero(key) {
	const result = this.get(key);
	return result !== undefined ? result : 0;
};

function solution() {
	let idx = 0;
	let [N, M] = input[idx++].split(' ').map(Number);

	const answer = [];

	while (N && M) {
		const rank = new Map();

		for (let i = 0; i < N; i++) {
			const weekly_rank = input[idx++].split(' ').map(Number);
			for (const rank_item of weekly_rank) {
				rank.set(rank_item, rank.getOrZero(rank_item) + 1);
			}
		}

		const rankArray = [...rank.entries()].sort((a, b) => b[1] - a[1]);
		let max = rankArray[0][1];
		let secondScore = 0;
		const result = [];

		for (let i = 1; i < rankArray.length; i++) {
			let [num, score] = rankArray[i];
			if (max === score) continue;

			if (!secondScore) {
				secondScore = score;
			}

			if (score === secondScore) {
				result.push(num);
			} else {
				break;
			}
		}

		answer.push(result.sort((a, b) => a - b).join(' '));

		[N, M] = input[idx++].split(' ').map(Number);
	}

	return answer.join('\n');
}

console.log(solution());
