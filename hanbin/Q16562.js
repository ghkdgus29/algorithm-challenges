const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const [N, M, k] = input[idx++].split(' ').map(Number);
	const candidate = input[idx++]
		.split(' ')
		.map((x, index) => [index + 1, Number(x)])
		.sort((a, b) => a[1] - b[1]);
	const parent = Array(N + 1)
		.fill()
		.map((x, index) => index);

	for (let i = 0; i < M; i++) {
		const [a, b] = input[idx++].split(' ').map(Number);
		union(find(a, parent), find(b, parent), parent);
	}

	let money = k;
	for (const [to, cost] of candidate) {
		const me = find(0, parent);
		const you = find(to, parent);

		if (cost > money) continue;

		if (me !== you) {
			union(0, to, parent);
			money -= cost;
		}
	}

	return parent.some((x) => find(x, parent) !== 0) ? 'Oh no' : k - money;
}

function find(a, parent) {
	if (parent[a] === a) return a;

	return (parent[a] = find(parent[a], parent));
}

function union(a, b, parent) {
	const A = find(a, parent);
	const B = find(b, parent);

	if (A === B) return;

	if (A < B) {
		parent[B] = A;
	} else {
		parent[A] = B;
	}
}

console.log(solution());

// 32:30
