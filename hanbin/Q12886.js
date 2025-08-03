const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const [A, B, C] = input[idx++].split(' ').map(Number);
	const arr = Array(1501)
		.fill()
		.map(() => Array(1501).fill(false));

	return { A, B, C, arr };
}

function solve({ A, B, C, arr }) {
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

	const result = BFS(A, B, C);
	return result ? 1 : 0;

	function BFS(a, b, c) {
		const total = a + b + c;
		const queue = new Queue();
		queue.push([a, b, c]);
		arr[a][b] = true;

		while (!queue.isEmpty()) {
			const cur = queue.poll().sort((a, b) => a - b);

			if (cur[0] === cur[1] && cur[0] === cur[2]) {
				return true;
			}

			for (let i = 0; i < 3; i++) {
				for (let j = i + 1; j < 3; j++) {
					if (cur[i] === cur[j]) continue;

					let nextMin = cur[i] + cur[i];
					let nextMax = cur[j] - cur[i];

					if (!arr[nextMin][nextMax]) {
						arr[nextMin][nextMax] = true;
						queue.push([
							nextMin,
							nextMax,
							total - nextMax - nextMin,
						]);
					}
				}
			}
		}
		return false;
	}
}

console.log(solution());
