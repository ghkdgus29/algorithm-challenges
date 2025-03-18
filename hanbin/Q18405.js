const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

class Queue {
	constructor() {
		this.storage = {};
		this.front = -1;
		this.rear = -1;
	}

	isEmpty() {
		return this.front === this.rear;
	}

	push(value) {
		this.storage[++this.rear] = value;
	}

	poll() {
		if (this.isEmpty()) return null;
		return this.storage[++this.front];
	}

	peek() {
		if (this.isEmpty()) return null;
		return this.storage[this.front + 1];
	}

	size() {
		return this.rear - this.front;
	}
}

function solution() {
	let idx = 0;
	const [N, K] = input[idx++].split(' ').map(Number);
	const arr = Array(N).fill();
	for (let i = 0; i < N; i++) {
		arr[i] = input[idx++].split(' ').map(Number);
	}
	const [S, X, Y] = input[idx++].split(' ').map(Number);

	const virus = Array(K + 1)
		.fill()
		.map(() => []);

	const queue = new Queue();
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[i][j] !== 0) {
				virus[arr[i][j]].push([i, j]);
			}
		}
	}

	for (let i = 1; i < virus.length; i++) {
		virus[i].forEach((x) => queue.push(x));
	}

	const dr = [-1, 0, 1, 0];
	const dc = [0, 1, 0, -1];

	for (let i = 0; i < S; i++) {
		const length = queue.size();
		if (length === 0) break;

		for (let j = 0; j < length && !queue.isEmpty(); j++) {
			const cur = queue.poll();

			for (let i = 0; i < 4; i++) {
				const nr = cur[0] + dr[i];
				const nc = cur[1] + dc[i];

				if (
					nr >= 0 &&
					nr < N &&
					nc >= 0 &&
					nc < N &&
					arr[nr][nc] === 0
				) {
					arr[nr][nc] = arr[cur[0]][cur[1]];
					queue.push([nr, nc]);
				}
			}
		}
	}

	return arr[X - 1][Y - 1];
}

console.log(solution());
