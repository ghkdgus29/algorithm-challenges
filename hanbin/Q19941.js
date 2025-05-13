const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

class Queue {
	constructor() {
		this.storage = {};
		this.head = -1;
		this.rear = -1;
	}

	isEmpty() {
		return this.head === this.rear;
	}

	push(value) {
		this.storage[++this.rear] = value;
	}

	peek() {
		return this.isEmpty() ? null : this.storage[this.head + 1];
	}

	poll() {
		return this.isEmpty() ? null : this.storage[++this.head];
	}
}

function solution() {
	let idx = 0;
	const [N, K] = input[idx++].split(' ').map(Number);
	const arr = input[idx].split('');

	let answer = 0;

	const count = {
		P: new Queue(),
		H: new Queue(),
	};

	let left = (right = 0);

	for (; right <= arr.length - 1; right++) {
		const cur = arr[right];

		const latestP = count.P.peek() ?? right;
		if (latestP < right - K) {
			count.P.poll();
		}

		const latestH = count.H.peek() ?? right;
		if (latestH < right - K) {
			count.H.poll();
		}

		if (cur === 'P') {
			if (!count.H.isEmpty()) {
				answer++;
				count.H.poll();
			} else {
				count.P.push(right);
			}
		} else {
			if (!count.P.isEmpty()) {
				answer++;
				count.P.poll();
			} else {
				count.H.push(right);
			}
		}
	}

	return answer;
}

console.log(solution());
