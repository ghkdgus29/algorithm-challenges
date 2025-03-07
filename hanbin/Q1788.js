const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const n = Number(input[0]);

	const arr = Array(1_000_001);
	arr[0] = 0;
	arr[1] = 1;
	for (let i = 2; i < arr.length; i++) {
		arr[i] = (arr[i - 1] + arr[i - 2]) % 1_000_000_000;
	}

	return solve(n, arr).join('\n');
}

function solve(n, arr) {
	return [getType(n), getValue(n, arr)];
}

function getType(n) {
	if (n > 0) {
		return 1;
	} else if (n === 0) {
		return 0;
	} else {
		if (Math.abs(n) % 2 === 0) {
			return -1;
		} else {
			return 1;
		}
	}
}

function getValue(n, arr) {
	return arr[Math.abs(n)];
}

console.log(solution());

// dp
