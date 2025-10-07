const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input
		.slice(idx)
		.map((x) => x.trim())
		.sort((a, b) => {
			if (a.length !== b.length) {
				return a.length - b.length;
			}
			return a.localeCompare(b);
		});
	return arr;
}

function solve(arr) {
	const answer = [];

	outer: for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j].startsWith(arr[i])) continue outer;
		}
		answer.push(arr[i]);
	}

	return answer.length;
}

console.log(solution());
