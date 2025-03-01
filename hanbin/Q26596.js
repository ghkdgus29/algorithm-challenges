const input = require('fs')
	.readFileSync('example.txt')
	.toString()
	.trim()
	.split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const map = new Map();
	for (let i = 0; i < N; i++) {
		const [prod, amt] = input[idx++].split(' ');
		map.set(prod, (map.get(prod) ?? 0) + Number(amt));
	}

	const arr = Array.from(map).sort((a, b) => a[1] - b[1]);

	const NUM = 1.618;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			const result = Math.floor(arr[i][1] * NUM);
			if (result === arr[j][1]) return 'Delicious!';
		}
	}

	return 'Not Delicious...';
}

console.log(solution());

// O(n^2)
// 브루트포스, 해시맵
