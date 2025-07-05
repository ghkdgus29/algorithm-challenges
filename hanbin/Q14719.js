const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const [H, W] = input[idx++].split(' ').map(Number);
	const height = input[idx].split(' ').map(Number);

	const data = {
		isCalc: false,
		distance: 0,
		init(bool) {
			this.isCalc = bool;
			this.distance = 0;
		},
	};

	let result = 0;

	for (let h = 0; h <= Math.max(...height); h++) {
		data.init(false);
		for (let w = 0; w < height.length; w++) {
			if (height[w] >= h) {
				if (data.isCalc) {
					result += data.distance;
				}
				data.init(true);
			} else {
				data.distance++;
			}
		}
	}

	return result;
}

console.log(solution());
