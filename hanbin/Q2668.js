const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input.slice(idx).map(Number);
	const set = new Set();

	for (let i = 1; i <= N; i++) {
		const visited = Array(N + 1).fill(false);
		dfs(i, visited);
	}

	function dfs(cur, visited) {
		visited[cur] = true;

		const next = arr[cur - 1];

		if (visited[next]) {
			visited[next] = false;
			set.add(next);
			return next;
		}

		const result = dfs(next, visited);
		if (visited[result]) set.add(cur);
	}

	const result = Array.from(set);
	return [result.length, ...result.sort((a, b) => a - b)].join('\n');
}

console.log(solution());
