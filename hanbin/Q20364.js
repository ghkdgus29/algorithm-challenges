const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const [N, Q] = input[0].split(' ').map(Number);
	const quries = input.slice(1).map(Number);
	return { N, Q, quries };
}

function solve({ N, Q, quries }) {
	const tree = Array(2 ** 20 + 1).fill(0);
	const answer = [];

	for (const query of quries) {
		const result = validate(query);

		if (typeof result === 'number') {
			fill(query, result);
			answer.push(result);
		} else {
			tree[query] = query;
			answer.push(0);
		}
	}

	return answer.join('\n');

	function validate(number) {
		let result;
		let current = number;

		while (current > 0) {
			if (tree[current] !== 0) {
				result = tree[current];
			}

			current = Math.floor(current / 2);
		}

		return result;
	}

	function fill(start, end) {
		const value = end;
		let current = start;

		while (current >= end) {
			tree[current] = value;
			current = Math.floor(current / 2);
		}
	}
}

console.log(solution());
