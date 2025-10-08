const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const arr = input[0].split(' ').map(Number);
	return arr;
}

function solve(limit_array) {
	const arr = Array(limit_array[0] + 1)
		.fill()
		.map(() => Array(limit_array[1] + 1).fill(-1));
	const answer = [];

	const total = limit_array[2];
	dfs([0, 0, limit_array[2]]);

	return Array.from(new Set(answer))
		.sort((a, b) => a - b)
		.join(' ');

	function dfs(array) {
		const [a, b, c] = array;

		if (a === 0) {
			answer.push(c);
		}

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (i === j) continue;
				if (array[i] === 0) continue;

				// i => j
				const limit = limit_array[j] - array[j];
				if (limit === 0) continue;

				if (array[i] >= limit) {
					array[i] -= limit;
					array[j] = limit_array[j];
				} else {
					array[j] += array[i];
					array[i] = 0;
				}

				if (arr[array[0]][array[1]] === -1) {
					arr[array[0]][array[1]] = total - array[0] - array[1];

					dfs(array);
				}

				array[0] = a;
				array[1] = b;
				array[2] = c;
			}
		}
	}

	return;
}

console.log(solution());
