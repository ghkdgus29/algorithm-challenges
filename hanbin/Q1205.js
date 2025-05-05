const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const [N, score, P] = input[idx++].split(' ').map(Number);
	const rank = input[idx] ? input[idx].split(' ').map(Number) : [];

	const [closestLower, expectedRank] = [
		findClosestLower(rank, score),
		findSameScore(rank, score),
	];

	if (closestLower === -1) {
		if (rank.length + 1 > P) {
			return -1;
		} else {
			return expectedRank === -1 ? rank.length + 1 : expectedRank + 1;
		}
	} else {
		if (closestLower + 1 > P) {
			return -1;
		} else {
			return expectedRank === -1 ? closestLower + 1 : expectedRank + 1;
		}
	}
}

function findSameScore(rank, score) {
	let idx = 0;
	for (; idx < rank.length; idx++) {
		if (rank[idx] === score) {
			return idx;
		}
	}
	return -1;
}

function findClosestLower(rank, score) {
	let idx = 0;
	for (; idx < rank.length; idx++) {
		if (rank[idx] < score) {
			return idx;
		}
	}
	return -1;
}

console.log(solution());
