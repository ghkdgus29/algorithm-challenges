const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const [N, M] = input[idx++].split(' ').map(Number);
	const arr = input.slice(idx).map((x) => x.split(' ').map(Number));

	const virusPosition = [];

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[i][j] === 2) {
				virusPosition.push([i, j]);
			}
		}
	}

	return { N, M, arr, virusPosition };
}

function solve({ N, M, arr, virusPosition }) {
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

	const dr = [-1, 0, 1, 0];
	const dc = [0, 1, 0, -1];
	let result = Number.MAX_SAFE_INTEGER;

	find(0, 0, 0);

	function find(i, count) {
		if (count === M) {
			result = Math.min(result, BFS());
			return;
		}

		for (let j = i; j < virusPosition.length; j++) {
			const [r, c] = virusPosition[j];
			arr[r][c] = -1;
			find(j + 1, count + 1);
			arr[r][c] = 2;
		}
	}

	function BFS() {
		const queue = new Queue();
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				if (arr[i][j] === -1) {
					const cur = [i, j];
					cur.time = 0;
					queue.push(cur);
				}
			}
		}

		const map = arr.map((x) => [...x]);

		let timeResult = 0;

		while (!queue.isEmpty()) {
			const cur = queue.poll();
			const [r, c] = cur;
			const time = cur.time;
			timeResult = Math.max(timeResult, time);

			for (let i = 0; i < 4; i++) {
				const nr = r + dr[i];
				const nc = c + dc[i];

				if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
				if (map[nr][nc] === -1 || map[nr][nc] === 1) continue;

				map[nr][nc] = -1;
				const next = [nr, nc];
				next.time = time + 1;
				queue.push(next);
			}
		}

		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				if (map[i][j] === 0 || map[i][j] === 2) {
					return Number.MAX_SAFE_INTEGER;
				}
			}
		}

		return timeResult;
	}

	return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

console.log(solution());
