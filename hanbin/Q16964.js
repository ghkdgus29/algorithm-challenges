const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const nodes = Array.from({ length: N + 1 })
		.fill()
		.map(() => new Set());

	for (let i = 0; i < N - 1; i++) {
		const [s, e] = input[idx++].split(' ').map(Number);

		nodes[s].add(e);
		nodes[e].add(s);
	}

	const order = input[idx].split(' ').map(Number);

	return { N, nodes, order };
}

function solve({ N, nodes, order }) {
	const visited = Array.from({ length: N + 1 }).fill(false);

	if (order[0] !== 1) {
		return 0;
	}

	let orderIndex = 1;

	const result = dfs(1);

	function dfs(node) {
		const nextSet = nodes[node];

		let result = true;
		for (let i = 0; i < nextSet.size; i++) {
			const next = order[orderIndex++];
			if (isNaN(next)) return true;

			if (nextSet.has(next)) {
				result = dfs(next);
			} else {
				orderIndex--;
				return false;
			}
		}
		return result;
	}

	return result ? 1 : 0;
}

console.log(solution());
