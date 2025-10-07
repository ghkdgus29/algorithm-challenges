const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	const iterator = input[Symbol.iterator]();
	let { value } = iterator.next();

	class Dictionary {
		constructor() {
			this.words = [];
		}

		add(word) {
			this.words.push(word);
		}

		checkWord(_map, center) {
			let result = 0;

			outer: for (const word of this.words) {
				const map = { ..._map };
				let centerUsed = false;

				for (const char of word) {
					if (char === center) {
						centerUsed = true;
					}

					if (map[char] >= 1) {
						map[char]--;
					} else {
						continue outer;
					}
				}

				if (!centerUsed) continue;

				result++;
			}

			return result;
		}
	}

	class Puzzle {
		constructor(words, dictionary) {
			this.map = {};
			this.center = words[4];
			this.dictionary = dictionary;

			for (const char of words) {
				this.map[char] = (this.map[char] ?? 0) + 1;
			}
		}

		changeCenter(char) {
			this.center = char;
		}

		check() {
			const keys = Object.keys(this.map);

			let min = Number.MAX_SAFE_INTEGER;
			let max = Number.MIN_SAFE_INTEGER;
			let minArray = [];
			let maxArray = [];

			for (const key of keys) {
				this.changeCenter(key);
				const result = this.dictionary.checkWord(this.map, this.center);

				if (result < min) {
					min = result;
					minArray = [key];
				} else if (result === min) {
					minArray.push(key);
				}

				if (result > max) {
					max = result;
					maxArray = [key];
				} else if (result === max) {
					maxArray.push(key);
				}
			}

			return { min, max, minArray, maxArray };
		}
	}

	const dictionary = new Dictionary();

	while (value.trim() !== '-') {
		dictionary.add(value.trim());
		value = iterator.next().value;
	}

	value = iterator.next().value;

	const puzzles = [];
	while (value.trim() !== '#') {
		puzzles.push(new Puzzle(value.trim(), dictionary));
		value = iterator.next().value;
	}

	return { puzzles };
}

function solve({ puzzles }) {
	const answer = [];
	for (const puzzle of puzzles) {
		const { min, max, minArray, maxArray } = puzzle.check();

		const result = `${minArray
			.sort((a, b) => a.localeCompare(b))
			.join('')} ${min} ${maxArray
			.sort((a, b) => a.localeCompare(b))
			.join('')} ${max}`;
		answer.push(result);
	}
	return answer.join('\n');
}

console.log(solution());
