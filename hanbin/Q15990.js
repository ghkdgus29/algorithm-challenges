const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const T = Number(input[idx++]);
	const Q = input.slice(idx).map(Number);
	const MOD = 1000000009;

	return { Q, MOD };
}

function solve({ Q, MOD }) {
	const result = [];

	const dp = init();
	const arr = dp();
	for (let i = 3; i < 100000; i++) {
		for (let j = 1; j <= 3; j++) {
			let prev = i - j;
			let current = 0;

			for (let k = 0; k < 3; k++) {
				if (j - 1 === k) continue;
				if (arr[k][prev] !== 0) {
					current += arr[k][prev];
				}
			}

			arr[j - 1][i] = current % MOD;
		}
	}

	Q.forEach((query) => {
		result.push(
			(arr[0][query - 1] + arr[1][query - 1] + arr[2][query - 1]) % MOD
		);
	});

	return result.join('\n');

	function init() {
		const arr = Array(3)
			.fill()
			.map(() => Array(100001).fill(0));

		return () => {
			arr[0][0] = 1;
			arr[1][1] = 1;
			arr[0][2] = 1;
			arr[1][2] = 1;
			arr[2][2] = 1;

			return arr;
		};
	}
	return;
}

console.log(solution());
