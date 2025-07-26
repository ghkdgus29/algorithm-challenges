const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.result;
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const nodes = Array(N + 1)
		.fill()
		.map(() => []);

	const cross = [];

	for (let i = 0; i < N; i++) {
		const [s, e] = input[idx++].split(' ').map(Number);

		nodes[s].push(e);
		nodes[e].push(s);

		if (nodes[s].length >= 3 && !cross.includes(s)) cross.push(s);
		if (nodes[e].length >= 3 && !cross.includes(e)) cross.push(e);
	}

	init.export = { N, nodes, cross };
}

function solve({ N, nodes, cross }) {
	const visited = Array(N + 1).fill(false);
	const isCycle = Array(N + 1).fill(-1);

	findCycle(1, 0);

	for (let cr of cross) {
		if (isCycle[cr] === 0) {
			checkDistance(cr, 0);
		}
	}

	function findCycle(node, p) {
		visited[node] = true;

		let result = false;

		for (const next of nodes[node]) {
			if (visited[next] && next !== p && isCycle[next] !== 0) {
				isCycle[node] = 0;
				return next;
			}

			if (visited[next]) continue;

			if ((result = findCycle(next, node))) {
				isCycle[node] = 0;
				if (result === node) {
					result = false;
					continue;
				}
				break;
			}
		}

		return result;
	}

	function checkDistance(node, dist) {
		isCycle[node] = dist;

		for (const next of nodes[node]) {
			if (isCycle[next] === -1) {
				checkDistance(next, dist + 1);
			}
		}
	}

	const result = isCycle.slice(1).join(' ');

	solve.export = { result };
}

console.log(solution());
