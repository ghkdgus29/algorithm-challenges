const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

const SAFTY_ZONE = 1 << 0;
const DANGER_ZONE = 1 << 1;
const DEAD_ZONE = 1 << 2;

function init() {
	let idx = 0;
	const map = Array(501)
		.fill()
		.map(() => Array(501).fill(SAFTY_ZONE));

	const dist_map = Array(501)
		.fill()
		.map(() => Array(501).fill(500 * 500 + 1));

	const N = Number(input[idx++]);

	function nomarlize(a, b) {
		if (b - a === 0) return b;

		return a + (b - a) / Math.abs(b - a);
	}

	for (let i = 0; i < N; i++) {
		const [x1, y1, x2, y2] = input[idx++].split(' ').map(Number);

		for (let i = x1; true; i = nomarlize(i, x2)) {
			for (let j = y1; true; j = nomarlize(j, y2)) {
				map[i][j] = DANGER_ZONE;

				if (j === y2) break;
			}
			if (i === x2) break;
		}
	}

	const M = Number(input[idx++]);
	for (let i = 0; i < M; i++) {
		const [x1, y1, x2, y2] = input[idx++].split(' ').map(Number);

		for (let i = x1; true; i = nomarlize(i, x2)) {
			for (let j = y1; true; j = nomarlize(j, y2)) {
				map[i][j] = DEAD_ZONE;

				if (j === y2) break;
			}
			if (i === x2) break;
		}
	}

	return { map, dist_map };
}

function solve({ map, dist_map }) {
	class PriorityQueue {
		constructor() {
			this.queue = [null];
			this.callback = () => {};
		}

		isEmpty() {
			return this.queue.length === 1;
		}

		push(val) {
			this.queue.push(val);
			this.#_heapifyUp();
		}

		peek() {
			return this.isEmpty() ? null : this.queue[1];
		}

		pop() {
			if (this.isEmpty()) return null;

			const returnValue = this.queue[1];
			const poppedValue = this.queue.pop();
			if (!this.isEmpty()) {
				this.queue[1] = poppedValue;
			}

			this.#_heapifyDown();
			return returnValue;
		}

		#_heapifyDown() {
			let current = 1;

			while (this.queue[current * 2] !== undefined) {
				let child = current * 2;

				if (
					this.queue[child + 1] !== undefined &&
					this.callback(
						this.queue[child],
						this.queue[current * 2 + 1]
					)
				) {
					child++;
				}

				if (this.callback(this.queue[current], this.queue[child])) {
					this.#_swap(current, child);
				}

				current = child;
			}
		}
		#_heapifyUp() {
			let current = this.queue.length - 1;

			while (current !== 1) {
				let parent = Math.floor(current / 2);

				if (this.callback(this.queue[parent], this.queue[current])) {
					this.#_swap(parent, current);
				}

				current = parent;
			}
		}
		#_swap(idx1, idx2) {
			const value = this.queue[idx1];
			this.queue[idx1] = this.queue[idx2];
			this.queue[idx2] = value;
		}
		setCallback(fn) {
			this.callback = fn;
		}
	}

	function getNextDist(map, x, y) {
		if (map[y][x] === SAFTY_ZONE) {
			return 0;
		}

		if (map[y][x] === DANGER_ZONE) {
			return 1;
		}
	}

	const pq = new PriorityQueue();
	pq.setCallback((parent, child) => {
		if (parent.dist > child.dist) {
			return true;
		}
		return false;
	});

	pq.push({ x: 0, y: 0, dist: 0 });
	dist_map[0][0] = 0;

	const dx = [0, 1, 0, -1];
	const dy = [-1, 0, 1, 0];
	while (!pq.isEmpty()) {
		const current = pq.pop();

		for (let i = 0; i < 4; i++) {
			const nx = current.x + dx[i];
			const ny = current.y + dy[i];

			if (nx >= 0 && nx < 501 && ny >= 0 && ny < 501) {
				if (map[ny][nx] === DEAD_ZONE) continue;

				const dist = getNextDist(map, nx, ny);

				if (current.dist + dist < dist_map[ny][nx]) {
					dist_map[ny][nx] = current.dist + dist;
					pq.push({
						x: nx,
						y: ny,
						dist: current.dist + dist,
					});
				}
			}
		}
	}

	return dist_map[500][500] === 250001 ? -1 : dist_map[500][500];
}

console.log(solution());
