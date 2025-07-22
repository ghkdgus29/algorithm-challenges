const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

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

function solution() {
	init();
	solve(init.export);
	return solve.export.time;
}

function init() {
	const N = Number(input[0]);
	init.export = { N };
}

function solve({ N }) {
	const actions = [copy, paste, removeOne];

	const time = BFS();

	solve.export = {
		time,
	};

	function BFS() {
		const queue = new Queue();
		const visited = {};

		const state = {
			clipboard: 0,
			current: 1,
			time: 0,
		};

		queue.push(state);

		while (!queue.isEmpty()) {
			const curState = queue.poll();

			if (curState.current === N) {
				return curState.time;
			}

			for (const action of actions) {
				const nextState = action(curState);
				nextState.time++;

				const flag = `${nextState.clipboard},${nextState.current}`;

				if (!visited[flag] && nextState.current >= 0) {
					visited[flag] = true;
					queue.push(nextState);
				}
			}
		}
	}

	function copy(state) {
		const newState = { ...state };
		newState.clipboard = state.current;
		return newState;
	}

	function paste(state) {
		const newState = { ...state };
		newState.current += state.clipboard;
		return newState;
	}

	function removeOne(state) {
		const newState = { ...state };
		newState.current--;
		return newState;
	}
}

console.log(solution());
