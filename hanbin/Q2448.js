const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const N = Number(input[0]);
	const arr = Array(N)
		.fill()
		.map(() => Array(N * 2 - 1).fill(' '));

	recursive(arr, N, 0, N - 1);

	return arr.map((it) => it.join('')).join('\n');
}

function recursive(arr, N, r, c) {
	if (N === 3) return drawUnitTriangle(arr, r, c);

	recursive(arr, N / 2, r, c);
	recursive(arr, N / 2, r + N / 2, c - N / 2);
	recursive(arr, N / 2, r + N / 2, c + N / 2);
}

function drawUnitTriangle(arr, r, c) {
	for (let i = -2; i <= 2; i++) {
		arr[r + 2][c + i] = '*';
	}

	arr[r][c] = '*';
	arr[r + 1][c - 1] = '*';
	arr[r + 1][c + 1] = '*';
}

console.log(solution());

// 재귀, 분할정복
