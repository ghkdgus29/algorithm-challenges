const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input.slice(idx).map((x) => x.trim().split(''));

	let max_cnt = 0;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			for (let k = 0; k <= 1; k++) {
				let nr = i + k;
				let nc = j + (1 - k);

				if (!arr[nr] || !arr[nr][nc]) {
					continue;
				}

				swap(arr, [i, j], [nr, nc]);

				max_cnt = Math.max(max_cnt, check(arr));

				swap(arr, [i, j], [nr, nc]);
			}
		}
	}

	return max_cnt;
}

function swap(arr, [i, j], [nr, nc]) {
	const tmp = arr[i][j];
	arr[i][j] = arr[nr][nc];
	arr[nr][nc] = tmp;
}

function check(arr) {
	let prev = '';
	let cur = '';
	let cnt = 0;
	let max_cnt = 0;

	for (let i = 0; i < arr.length; i++) {
		prev = arr[i][0];
		cnt = 0;

		for (let j = 0; j < arr.length; j++) {
			cur = arr[i][j];

			if (prev === cur) {
				cnt++;
				max_cnt = Math.max(cnt, max_cnt);
			} else {
				cnt = 1;
			}

			prev = arr[i][j];
		}
	}

	for (let i = 0; i < arr.length; i++) {
		prev = arr[0][i];
		cnt = 0;

		for (let j = 0; j < arr.length; j++) {
			cur = arr[j][i];

			if (prev === cur) {
				cnt++;
				max_cnt = Math.max(cnt, max_cnt);
			} else {
				cnt = 1;
			}

			prev = arr[j][i];
		}
	}

	return max_cnt;
}

console.log(solution());
