const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	const word = input[0].trim();

	let count_0 = 0;
	let count_1 = 0;

	const answer = [];

	for (let i = 0; i < word.length; i++) {
		if (word[i] === '0') {
			++count_0;
		} else {
			++count_1;
		}
	}

	count_0 /= 2;
	count_1 /= 2;

	const set = new Set();
	for (let i = 0; i < word.length; i++) {
		if (count_0 > 0 && word[i] === '0') {
			set.add(i);
			count_0--;
		} else if (count_0 === 0) break;
	}

	for (let i = word.length - 1; i >= 0; i--) {
		if (count_1 > 0 && word[i] === '1') {
			set.add(i);
			count_1--;
		} else if (count_1 === 0) break;
	}

	for (let i = 0; i < word.length; i++) {
		if (!set.has(i)) continue;

		answer.push(word[i]);
	}

	return answer.join('');
}

console.log(solution());
