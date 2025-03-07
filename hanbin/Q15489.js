const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const [R, C, W] = input[0].split(' ').map(Number);

	const arr = Array(30)
		.fill()
		.map(() => Array(30).fill(0));

	arr[0][0] = 1;

	for (let i = 1; i < 30; i++) {
		for (let j = 0; j <= i; j++) {
			arr[i][j] = arr[i - 1][j] + (arr[i - 1][j - 1] ?? 0);
		}
	}

	let result = 0;
	let gap = R - 1;

	for (let i = R - 1; i < R - 1 + W; i++) {
		for (let j = C - 1; j <= C - 1 + i - gap; j++) {
			result += arr[i][j];
		}
	}

	return result;
}

console.log(solution());

// dp
