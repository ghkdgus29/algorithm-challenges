const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const life = input[idx++].split(' ').map(Number);
	const pleasure = input[idx++].split(' ').map(Number);

	const arr = Array(N)
		.fill()
		.map(() => Array(101).fill(0));

	for (let i = 0; i < N; i++) {
		for (let j = 1; j <= 100; j++) {
			if (j <= life[i])
				arr[i][j] = Math.max(arr[i - 1]?.[j] ?? 0, arr[i][j]);
			else
				arr[i][j] = Math.max(
					(arr[i - 1]?.[j - life[i]] ?? 0) + pleasure[i],
					arr[i - 1]?.[j] ?? 0
				);
		}
	}

	return Math.max(...arr[N - 1]);
}

console.log(solution());
