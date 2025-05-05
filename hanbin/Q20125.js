const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);

	const arr = input.slice(idx).map((x) => x.trim().split(''));

	let head;
	let heart;
	let leftArm = 0;
	let rightArm = 0;
	let waist = 0;
	let leftLeg = 0;
	let rightLeg = 0;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (!head && arr[i][j] === '*') {
				head = [i, j];
				heart = [i + 1, j];
				break;
			}
		}
	}

	// leftArm
	for (let i = heart[1] - 1; i >= 0; i--) {
		if (arr[heart[0]][i] === '*') {
			leftArm++;
		} else {
			break;
		}
	}

	// rightArm
	for (let i = heart[1] + 1; i < N; i++) {
		if (arr[heart[0]][i] === '*') {
			rightArm++;
		} else {
			break;
		}
	}

	// waist
	for (let i = heart[0] + 1; i < N; i++) {
		if (arr[i][heart[1]] == '*') {
			waist++;
		} else {
			break;
		}
	}

	// leftLeg
	for (let i = heart[0] + waist; i + 1 < N; i++) {
		if (arr[i + 1][heart[1] - 1] === '*') {
			leftLeg++;
		} else {
			break;
		}
	}

	// rightLeg
	for (let i = heart[0] + waist; i + 1 < N; i++) {
		if (arr[i + 1][heart[1] + 1] === '*') {
			rightLeg++;
		} else {
			break;
		}
	}

	const answer = [
		heart.map((x) => x + 1),
		[leftArm, rightArm, waist, leftLeg, rightLeg],
	];
	return answer.map((x) => x.join(' ')).join('\n');
}

console.log(solution());
