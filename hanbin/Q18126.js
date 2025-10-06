const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const nodes = Array(N + 1)
		.fill()
		.map(() => []);
	for (let i = 0; i < N - 1; i++) {
		const [s, e, d] = input[idx++].split(' ').map(Number);
		nodes[s].push([e, d]);
		nodes[e].push([s, d]);
	}

	return { nodes };
}

function solve({ nodes }) {
	let result = 0;

	dfs(1, 0, 0);
	function dfs(node, parent, dist) {
		result = Math.max(result, dist);
		for (const [next, d] of nodes[node]) {
			if (next === parent) continue;
			dfs(next, node, d + dist);
		}
	}

	return result;
}

console.log(solution());
