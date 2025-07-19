const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input[idx].split('');

	const array = Array(N)
		.fill()
		.map(() => Array(N).fill());

	let index = 0;
	for (let i = 0; i < N; i++) {
		for (let j = i; j < N; j++) {
			array[i][j] = arr[index++];
		}
	}

	const result = select(array, [], 0, N, []);

	return result.value;
}

function select(array, selected, depth, N, prefixSum) {
	if (depth === N) {
		return {
			done: true,
			value: selected.join(' '),
		};
	}
	let result = { done: false };

	for (let i = -10; i <= 10; i++) {
		const sum = (prefixSum[depth - 1] ?? 0) + i;
		prefixSum[depth] = sum;

		selected.push(i);

		if (check(array, selected, depth, prefixSum).done) {
			result = select(array, selected, depth + 1, N, prefixSum);
		}

		selected.pop();

		if (result.done) {
			return result;
		}
	}

	return result;
}

function check(array, selected, depth, prefixSum) {
	for (let j = 0; j <= depth; j++) {
		const sum = prefixSum[depth] - (prefixSum[j - 1] ?? 0);
		const sign = array[j][depth];
		const handler = getHandler(sign);
		if (!handler(sum)) return { done: false };
	}

	return { done: true, value: selected };
}

function getHandler(x) {
	switch (x) {
		case '-':
			return (diff) => diff < 0;
		case '+':
			return (diff) => diff > 0;
		case '0':
			return (diff) => diff == 0;
	}
}
console.log(solution());
