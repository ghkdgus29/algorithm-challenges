const { constrainedMemory } = require('process');
const { isContext } = require('vm');

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
	const nodes = Array.from({ length: N + 1 })
		.fill()
		.map(() => []);

	for (let i = 0; i < N - 1; i++) {
		const [s, e] = input[idx++].split(' ').map(Number);

		nodes[s].push(e);
		nodes[e].push(s);
	}

	const order = input[idx].split(' ').map(Number);

	init.export = { N, nodes, order };
}

function solve({ N, nodes, order }) {
	if (order[0] !== 1) {
		solve.export = {
			result: 0,
		};
		return;
	}
	class Queue {
		constructor() {
			this.storage = {};
			this.front = -1;
			this.rear = -1;
		}

		push(val) {
			this.storage[++this.rear] = val;
		}

		isEmpty() {
			return this.front === this.rear;
		}

		peek() {
			if (this.isEmpty()) return null;
			return this.storage[this.front + 1];
		}

		poll() {
			if (this.isEmpty()) return null;
			return this.storage[++this.front];
		}
	}

	const queue = new Queue();
	const start = order[0];

	let log = Array.from({ length: N + 1 })
		.fill()
		.map(() => new Set());

	const visited = Array.from({ length: N + 1 }).fill(false);

	visited[start] = true;
	log[0].add(start);
	for (let i of order) {
		queue.push(i);
	}

	let logOrder = 1;
	while (!queue.isEmpty()) {
		// const { number, depth } = queue.poll();
		const number = queue.poll();

		for (const next of nodes[number]) {
			if (!visited[next]) {
				visited[next] = true;
				log[logOrder].add(next);
			}
		}

		logOrder++;
	}

	// log = log.filter((x) => x.size > 0);

	let orderIndex = 0;
	let isCorrect = 0;
	outer: for (let set of log) {
		const length = set.size;

		for (let i = 0; i < length; i++) {
			if (!set.has(order[orderIndex++])) {
				break outer;
			} else {
				isCorrect++;
			}
		}
	}

	let result = isCorrect === order.length ? 1 : 0;

	solve.export = { result };
}

console.log(solution());
