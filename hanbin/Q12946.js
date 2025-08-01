const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;

	const N = Number(input[idx++]);
	const arr = input.slice(idx).map((x) => x.trim().split(''));

	return { N, arr };
}

function solve({ N, arr }) {
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

	const dr = [1, 1, 0, -1, -1, 0];
	const dc = [0, -1, -1, 0, 1, 1];
	const queue = new Queue();

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[i][j] === 'X') {
				BFS(i, j);
			}
		}
	}

	function BFS(r, c) {
		queue.push([r, c]);
		arr[r][c] = 0;

		while (!queue.isEmpty()) {
			const [r, c] = queue.poll();
			const colorSet = [false, false, false];

			for (let k = 0; k < 6; k++) {
				const nr = r + dr[k];
				const nc = c + dc[k];

				if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

				if (arr[nr][nc] !== 'X' && arr[nr][nc] !== '-') {
					colorSet[arr[nr][nc]] = true;
				}

				if (arr[nr][nc] === 'X') {
					queue.push([nr, nc]);
					arr[nr][nc] = -1;
				}
			}

			const color = colorSet.findIndex((x) => !x);
			arr[r][c] = color;
		}
	}

	const result = new Set();

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[i][j] !== '-') {
				result.add(arr[i][j]);
			}
		}
	}

	return Math.min(result.size, 3);
}

console.log(solution());
