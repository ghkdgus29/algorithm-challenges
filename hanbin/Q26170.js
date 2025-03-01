const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const arr = Array(5)
		.fill()
		.map(() => Array(5).fill());

	const visited = Array(5)
		.fill()
		.map(() => Array(5).fill(false));

	for (let i = 0; i < 5; i++) {
		const cur = input[i].split(' ').map(Number);

		for (let j = 0; j < 5; j++) {
			arr[i][j] = cur[j];

			if (cur[j] === -1) {
				visited[i][j] = true;
			}
		}
	}

	let [r, c] = input[input.length - 1].split(' ').map(Number);
	visited[r][c] = true;

	dfs(arr, visited, r, c, 0, 0);

	return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

let answer = Number.MAX_SAFE_INTEGER;
function dfs(arr, visited, r, c, count, depth) {
	if (count === 3 && depth < answer) {
		answer = depth;
		return;
	}

	for (let i = 0; i < 4; i++) {
		let nr = r + dr[i];
		let nc = c + dc[i];

		if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5 && !visited[nr][nc]) {
			visited[nr][nc] = true;
			dfs(
				arr,
				visited,
				nr,
				nc,
				count + (arr[nr][nc] === 1 ? 1 : 0),
				depth + 1
			);
			visited[nr][nc] = false;
		}
	}
}

console.log(solution());

// dfs, 백트래킹
