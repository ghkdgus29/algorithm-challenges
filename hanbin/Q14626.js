const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const ISBN = input[0].trim();
	const index = ISBN.indexOf('*');
	const weight = index % 2 === 0 ? 1 : 3;
	const m = Number(ISBN[ISBN.length - 1]);
	const generator = gen(ISBN.slice(0, -1));

	const result = [...generator].reduce((prev, cur) => prev + cur, 0);

	for (let i = 0; i <= 9; i++) {
		if ((result + weight * i + m) % 10 === 0) {
			return i;
		}
	}
}

function* gen(isbn) {
	for (let i = 0; i < isbn.length; i++) {
		const cur = isbn[i];
		if (cur === '*') {
			yield 0;
			continue;
		}

		yield cur * (i % 2 === 0 ? 1 : 3);
	}
}

console.log(solution());
