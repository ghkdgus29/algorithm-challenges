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
	const visited = Array(N)
		.fill()
		.map(() => Array(M).fill(false));
	let hasCycle = false;

	const dr = [0, 1, 0, -1];
	const dc = [1, 0, -1, 0];

	outer: for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (!visited[i][j]) {
				start = [i, j];
				visited[i][j] = true;

				const result = dfs(i, j, 0, -1, -1);

				if (result) {
					hasCycle = true;
					break outer;
				}
			}
		}
	}

	function dfs(r, c, depth, parentR, parentC) {
		let result = false;

		for (let i = 0; i < dr.length; i++) {
			const nr = r + dr[i];
			const nc = c + dc[i];

			if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
			if (array[nr][nc] !== array[r][c]) continue;

			if (visited[nr][nc]) {
				if (nr !== parentR || nc !== parentC) return true;
			} else {
				visited[nr][nc] = true;
				if (dfs(nr, nc, depth + 1, r, c)) return true;
			}
		}

		return result;
	}

	solve.export = { result: hasCycle ? 'Yes' : 'No' };
}

console.log(solution());
