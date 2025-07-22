const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.array;
}

function init() {
	let idx = 0;
	const [H, W, X, Y] = input[idx++].split(' ').map(Number);
	const array = input.slice(idx).map((x) => x.split(' ').map(Number));

	init.export = {
		H,
		W,
		X,
		Y,
		array,
	};
}

function solve({ H, W, X, Y, array }) {
	const origin = Array(H)
		.fill()
		.map(() => Array(W).fill(0));

	for (let i = 0; i < X; i++) {
		for (let j = 0; j < W; j++) {
			origin[i][j] = array[i][j];
		}
	}

	for (let i = X; i < X + H; i++) {
		for (let j = Y; j < Y + W; j++) {
			array[i][j] -= origin[i - X][j - Y];
		}
		origin[i] = array[i];
	}

	array = array
		.slice(0, H)
		.map((x) => x.slice(0, W).join(' '))
		.join('\n');

	solve.export = { array: array };
}

console.log(solution());
