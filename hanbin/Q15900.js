const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);

	const nodes = Array(N + 1)
		.fill()
		.map(() => []);

	for (let i = 0; i < N - 1; i++) {
		const [s, e] = input[idx++].split(' ').map(Number);
		nodes[s].push(e);
		nodes[e].push(s);
	}

	const totalDistance = getTotalDistance(nodes);

	return getResult(totalDistance);
}

function getResult(distance) {
	if (distance % 2 === 0) {
		return 'No';
	}
	return 'Yes';
}

function getTotalDistance(nodes) {
	const visited = Array(nodes.length).fill(false);
	let totalDistance = 0;
	let isFromLeaf = false;

	dfs(1, 0);

	function dfs(nodeIndex, distance) {
		visited[nodeIndex] = true;

		for (const next of nodes[nodeIndex]) {
			if (!visited[next]) {
				isFromLeaf = false;
				dfs(next, distance + 1);
			}
		}

		if (!isFromLeaf) {
			isFromLeaf = true;
			totalDistance += distance;
		}
	}

	return totalDistance;
}

console.log(solution());
