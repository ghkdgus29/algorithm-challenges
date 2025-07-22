const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.result;
}

function init() {
	let idx = 0;
	const [N, M] = input[idx++].split(' ').map(Number);
	const array = input.slice(idx).map((x) => x.trim().split(''));

	init.export = { N, M, array };
}

function solve({ N, M, array }) {
	let start;
	let visited = Array(N)
		.fill()
		.map(() => Array(M).fill(false));
	let hasCycle = false;

	const dr = [0, 1, 0, -1];
	const dc = [1, 0, -1, 0];

	outer: for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			visited = Array(N)
				.fill()
				.map(() => Array(M).fill(false));

			start = [i, j];
			visited[i][j] = true;

			const result = dfs(i, j, 0);

			if (result) {
				hasCycle = true;
				break outer;
			}
		}
	}

	function dfs(r, c, depth) {
		let result = false;

		for (let i = 0; i < dr.length; i++) {
			const nr = r + dr[i];
			const nc = c + dc[i];

			if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
				if (
					depth >= 3 &&
					nr === start[0] &&
					nc === start[1] &&
					visited[nr][nc]
				) {
					return true;
				}

				if (!visited[nr][nc] && array[r][c] === array[nr][nc]) {
					visited[nr][nc] = true;
					result = dfs(nr, nc, depth + 1);
					if (result) return true;
				}
			}
		}

		return result;
	}

	solve.export = { result: hasCycle ? 'Yes' : 'No' };
}

console.log(solution());
