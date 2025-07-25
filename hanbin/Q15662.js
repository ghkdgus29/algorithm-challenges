const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	init();
	solve(init.export);
	return solve.export.result;
}

function init() {
	class Gear {
		constructor(items) {
			this.items = items;
			this._top = 0;
		}

		turnLeft() {
			if (this._top === 7) {
				this._top = 0;
			} else {
				this._top++;
			}
		}

		turnRight() {
			if (this._top === 0) {
				this._top = 7;
			} else {
				this._top--;
			}
		}

		get top() {
			return this.items[this._top];
		}

		get left() {
			return this.items[(this._top + 6) % 8];
		}

		get right() {
			return this.items[(this._top + 2) % 8];
		}
	}

	let idx = 0;
	const N = Number(input[idx++]);

	const gears = [];
	for (let i = 0; i < N; i++) {
		gears.push(new Gear(input[idx++].trim().split('')));
	}

	const Q = Number(input[idx++]);
	const queries = [];
	for (let i = 0; i < Q; i++) {
		queries.push(input[idx++].split(' ').map(Number));
	}

	init.export = { gears, queries };
}

function solve({ gears, queries }) {
	for (const [num, dir] of queries) {
		let index = num - 1;

		const resultArray = Array(gears.length).fill(0);
		resultArray[index] = dir;

		calculation(resultArray, index, index - 1, dir);
		calculation(resultArray, index, index + 1, dir);

		for (let i = 0; i < resultArray.length; i++) {
			const dir = resultArray[i];
			const currentGear = gears[i];

			if (dir === -1) {
				currentGear.turnLeft();
			} else if (dir === 1) {
				currentGear.turnRight();
			}
		}
	}

	const result = gears.filter((x) => x.top === '1').length;

	function calculation(resultArray, num, nextNum, dir) {
		if (nextNum < 0 || nextNum >= gears.length) return;

		if (num > nextNum) {
			if (gears[num].left !== gears[nextNum].right) {
				resultArray[nextNum] = -dir;
				calculation(resultArray, nextNum, nextNum - 1, -dir);
			}
		} else {
			if (gears[num].right !== gears[nextNum].left) {
				resultArray[nextNum] = -dir;
				calculation(resultArray, nextNum, nextNum + 1, -dir);
			}
		}
	}

	solve.export = { result };
}

console.log(solution());
