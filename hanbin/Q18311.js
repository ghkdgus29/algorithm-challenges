const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const [N, K] = input[idx++].split(' ').map(Number);
	const arr = input[idx].split(' ').map(Number);
	const totalArr = arr.concat([...arr].reverse());

	for (let i = 1; i < totalArr.length; i++) {
		totalArr[i] = totalArr[i - 1] + totalArr[i];
	}

	let answer = 0;
	for (let i = 0; i < 2 * N; i++) {
		if (totalArr[i] <= K) {
			answer++;
		} else {
			break;
		}
	}

	return answer > N ? N - (answer - N) : answer + 1;
}

console.log(solution());
