const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const [H, W, N, M] = input[0].split(' ').map(Number);

	const dh = 1 + N;
	const dw = 1 + M;

	return Math.ceil(H / dh) * Math.ceil(W / dw);
}

console.log(solution());
