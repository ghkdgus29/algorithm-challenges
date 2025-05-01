const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const T = Number(input[idx++]);
	const words = input.slice(idx).map((x) => x.trim());
	const answer = [];

	for (const word of words) {
		answer.push(getPalindromeType(word));
	}

	return answer.join('\n');
}

const PALINDROME = 0;
const PSEUDO_PALINDROME = 1;
const OTHER = 2;
const CANDIDATE_PSEUDO_PALINDROME = -1;

function getPalindromeType(word) {
	let i = 0;
	const center = Math.ceil(word.length / 2);

	let answer = PALINDROME;

	for (; i < center; i++) {
		if (word[i] !== word[word.length - 1 - i]) {
			answer = CANDIDATE_PSEUDO_PALINDROME;
			break;
		}
	}

	if (answer === CANDIDATE_PSEUDO_PALINDROME) {
		const newWord = word.slice(0, i) + word.slice(i + 1);

		let flag1 = CANDIDATE_PSEUDO_PALINDROME;
		let flag2 = CANDIDATE_PSEUDO_PALINDROME;

		for (let i = 0; i < Math.ceil(newWord.length); i++) {
			if (newWord[i] !== newWord[newWord.length - 1 - i]) {
				flag1 = OTHER;
				break;
			}
		}

		if (flag1 === OTHER) {
			const newWord2 =
				word.slice(0, word.length - 1 - i) +
				word.slice(word.length - i);

			for (let i = 0; i < Math.ceil(newWord2.length); i++) {
				if (newWord2[i] !== newWord2[newWord2.length - 1 - i]) {
					flag2 = OTHER;
					break;
				}
			}
		}

		answer = flag2;
	}

	if (answer === CANDIDATE_PSEUDO_PALINDROME) {
		answer = PSEUDO_PALINDROME;
	}

	return answer;
}

console.log(solution());
