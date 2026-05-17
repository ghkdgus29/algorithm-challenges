function solution(x, y, n) {
	if (x === y) return 0;

	const functions = [(x) => x + n, (x) => x * 2, (x) => x * 3];

	const visited = Array(1000001).fill(false);
	visited[x] = true;

	const queue = new Queue();
	queue.push([x, 0]);

	while (!queue.isEmpty()) {
		const [value, depth] = queue.pop();

		for (const func of functions) {
			const next_value = func(value);

			if (next_value > y) continue;
			if (visited[next_value]) continue;
			if (next_value === y) return depth + 1;

			queue.push([next_value, depth + 1]);
			visited[next_value] = true;
		}
	}

	return -1;
}

class Queue {
	constructor() {
		this.storage = {};
		this.head = -1;
		this.leaf = -1;
	}

	push(value) {
		this.storage[++this.leaf] = value;
	}

	isEmpty() {
		return this.head === this.leaf;
	}

	pop() {
		if (this.isEmpty()) return null;
		return this.storage[++this.head];
	}
}
