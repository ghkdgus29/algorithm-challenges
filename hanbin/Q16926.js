const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.result;
}

function init() {
	let idx = 0;
	const [N, M, R] = input[idx++].split(' ').map(Number);
	const array = input.slice(idx).map((x) => x.split(' ').map(Number));

	init.export = { array, N, M, R };
}

function solve({ array, N, M, R }) {
	const dr = [0, 1, 0, -1];
	const dc = [1, 0, -1, 0];

	const flattenedArray = [];
	flatten(array, 0);
	for (const targetArray of flattenedArray) {
		targetArray.start += R;
	}
	unflatten(array, 0);

	function flatten(array, depth) {
		if (depth >= Math.min(N, M) / 2) return;

		const resultArray = [];
		explore(array, depth, (array, r, c) => resultArray.push(array[r][c]));

		resultArray.start = 0;
		resultArray.pop();

		flattenedArray.push(resultArray);

		flatten(array, depth + 1);
	}

	function unflatten(array, depth) {
		if (depth >= Math.min(N, M) / 2) return;

		explore(array, depth, (array, r, c) => {
			const targetArray = flattenedArray[depth];
			let idx = targetArray.start % targetArray.length;
			array[r][c] = targetArray[idx];
			targetArray.start++;
		});
		unflatten(array, depth + 1);
	}

	function explore(array, depth, callback) {
		let [r, c] = [0 + depth, 0 + depth];
		callback(array, r, c);

		let dir = 0;
		for (let i = dir; i < dr.length && dir < 4; ) {
			let nr = r + dr[i];
			let nc = c + dc[i];

			if (
				nr < depth ||
				nr > array.length - 1 - depth ||
				nc < depth ||
				nc > array[0].length - 1 - depth
			) {
				i++;
				continue;
			}

			callback(array, nr, nc);

			r = nr;
			c = nc;
		}
	}

	let result = array.map((x) => x.join(' ')).join('\n');

	solve.export = { result };
}

console.log(solution());
