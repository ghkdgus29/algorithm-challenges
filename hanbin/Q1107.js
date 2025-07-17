const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const broken = Number(input[idx++]);
	let arr = input[idx];
	if (!arr) arr = '';
	const brokenSet = new Set(arr.trim().split(' '));

	if (N === 100) return 0;

	let min = Math.abs(N - 100);
	outer: for (let i = 0; i <= 1000000; i++) {
		const numberString = i.toString();
		for (let j = 0; j < numberString.length; j++) {
			if (brokenSet.has(numberString[j])) {
				continue outer;
			}
		}

		let count =
			Math.min(Math.abs(100 - i), numberString.length) + Math.abs(i - N);

		min = Math.min(min, count);
	}

	return min;
}

console.log(solution());
