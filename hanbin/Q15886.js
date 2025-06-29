const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input[idx].split('');

	const present = Array(N).fill(-1);
	const visited = Array(N).fill(false);

	for (let i = 0; i < N; i++) {
		if (!visited[i]) {
			move(i, arr, visited, present);
		}
	}

	return new Set(present.filter((x) => x !== undefined)).size;
}

function move(index, array, visited, present) {
	if (index < 0) return 0;
	if (index >= array.length) return array.length - 1;

	if (visited[index]) {
		if (present[index] === -1) {
			present[index] = index;
		}
		return present[index];
	}

	visited[index] = true;

	let result;
	if (array[index] === 'E') {
		result = move(index + 1, array, visited, present);
	} else {
		result = move(index - 1, array, visited, present);
	}

	present[index] = result;
}

console.log(solution());
