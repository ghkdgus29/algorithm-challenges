const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const N = BigInt(input);
	return N;
}

function solve(N) {
	function find(number) {
		let l = 0n;
		let h = number / 2n;

		while (true) {
			let mid = (l + h) / 2n;
			const current = mid * mid;

			if (current < number) {
				l = mid + 1n;
			} else if (current > number) {
				h = mid - 1n;
			} else {
				return mid;
			}
		}
	}

	return find(N).toString();
}

console.log(solution());
