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

	push(val) {
		this.storage[++this.rear] = val;
	}

	pick() {
		if (this.isEmpty()) return null;
		return this.storage[this.rear];
	}

	poll() {
		if (this.isEmpty()) return null;
		const result = this.storage[this.front + 1];
		delete this.storage[this.front++];
		return result;
	}

	get length() {
		return this.rear - this.front;
	}
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

function solution() {
	let idx = 0;
	const T = Number(input[idx++]);
	const answer = [];

	for (let i = 0; i < T; i++) {
		const [H, W] = input[idx++].split(' ').map(Number);
		const arr = input.slice(idx, idx + H).map((it) => it.trim().split(''));

		idx += H;
		let cnt = 0;
		const visited = Array(H)
			.fill()
			.map(() => Array(W).fill(false));

		for (let i = 0; i < H; i++) {
			for (let j = 0; j < W; j++) {
				if (arr[i][j] === '#' && !visited[i][j]) {
					cnt++;
					BFS(i, j, arr, visited);
				}
			}
		}

		answer.push(cnt);
	}

	return answer.join('\n');
}

function BFS(r, c, arr, visited) {
	const queue = new Queue();
	queue.push([r, c]);
	visited[r][c] = true;

	while (!queue.isEmpty()) {
		const now = queue.poll();

		for (let i = 0; i < 4; i++) {
			const nr = now[0] + dr[i];
			const nc = now[1] + dc[i];

			if (
				nr >= 0 &&
				nr < arr.length &&
				nc >= 0 &&
				nc < arr[nr].length &&
				!visited[nr][nc] &&
				arr[nr][nc] === '#'
			) {
				visited[nr][nc] = true;
				queue.push([nr, nc]);
			}
		}
	}
}

console.log(solution());

// BFS
