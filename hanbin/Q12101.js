const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const [N, K] = input[0].split(' ').map(Number);

	const arr = Array(13)
		.fill()
		.map(() => []);

	arr[1].push('1');
	arr[2].push('1+1', '2');
	arr[3].push('1+1+1', '1+2', '2+1', '3');

	for (let i = 4; i <= 12; i++) {
		for (let j = 1; j <= 3; j++) {
			for (const cur of arr[i - j]) {
				arr[i].push(cur + '+' + j);
			}
		}
	}

	arr[N].sort();

	return arr[N][K - 1] ?? -1;
}

console.log(solution());
