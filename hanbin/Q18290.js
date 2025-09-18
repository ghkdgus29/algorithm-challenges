const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const [N, M, K] = input[idx++].split(' ').map(Number);
	const arr = input.slice(idx++).map((x) => x.split(' ').map(Number));
	const flattenedArray = [];
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			flattenedArray.push(arr[i][j]);
		}
	}

	return { N, M, K, flattenedArray };
}

function solve({ N, M, K, flattenedArray }) {
	const CANT_REACH = -10_001;
	let answer = Number.MIN_SAFE_INTEGER;

	function sum(index, total, depth) {
		if (depth === K) {
			answer = Math.max(answer, total);
			return;
		}
		if (index >= flattenedArray.length) return;

		for (let i = index; i < flattenedArray.length; i++) {
			if (flattenedArray[i] === CANT_REACH) continue;

			// total에 arr[i]를 더한다
			const toggle = toggler(i);

			// arr[i-1] arr[i-M] arr[i+1] arr[i+M]을 접근 불가처리한다
			toggle.setOff();

			sum(i + 1, total + flattenedArray[i], depth + 1);

			// arr[i-1] arr[i-M] arr[i+1] arr[i+M]을 접근 가능처리한다
			toggle.setOn();
		}
	}

	function toggler(index) {
		const prevValue = [
			flattenedArray[index - M],
			flattenedArray[index - 1],
			flattenedArray[index + 1],
			flattenedArray[index + M],
		];

		return {
			setOff() {
				if (flattenedArray[index - M] !== undefined)
					flattenedArray[index - M] = CANT_REACH;
				if (
					flattenedArray[index - 1] !== undefined &&
					Math.floor((index - 1) / M) === Math.floor(index / M)
				)
					flattenedArray[index - 1] = CANT_REACH;
				if (
					flattenedArray[index + 1] !== undefined &&
					Math.floor((index + 1) / M) === Math.floor(index / M)
				)
					flattenedArray[index + 1] = CANT_REACH;
				if (flattenedArray[index + M] !== undefined)
					flattenedArray[index + M] = CANT_REACH;
			},
			setOn() {
				if (flattenedArray[index - M] == CANT_REACH)
					flattenedArray[index - M] = prevValue[0];
				if (flattenedArray[index - 1] == CANT_REACH)
					flattenedArray[index - 1] = prevValue[1];
				if (flattenedArray[index + 1] == CANT_REACH)
					flattenedArray[index + 1] = prevValue[2];
				if (flattenedArray[index + M] == CANT_REACH)
					flattenedArray[index + M] = prevValue[3];
			},
		};
	}

	sum(0, 0, 0);

	return answer;
}

console.log(solution());
