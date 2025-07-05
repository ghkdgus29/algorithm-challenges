const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;

	const [N, W] = input[idx++].split(' ').map(Number);

	const nodes = Array(N + 1)
		.fill()
		.map(() => []);

	for (let i = 0; i < N - 1; i++) {
		const [s, e] = input[idx++].split(' ').map(Number);

		nodes[s].push(e);
		nodes[e].push(s);
	}

	const leafNodeCount = getLeafNodeCount(nodes);

	return (W / leafNodeCount).toFixed(10);
}

function getLeafNodeCount(nodes) {
	let leafNodeCount = 0;

	for (let i = 2; i <= nodes.length - 1; i++) {
		if (nodes[i].length === 1) leafNodeCount++;
	}

	return leafNodeCount;
}

console.log(solution());
