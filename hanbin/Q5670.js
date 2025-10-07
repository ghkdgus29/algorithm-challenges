const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const quries = [];

	while (true) {
		const N = Number(input[idx++]);
		if (isNaN(N)) break;

		const words = Array(N)
			.fill()
			.map(() => {
				return input[idx++].trim();
			});
		quries.push(words);
	}

	return quries;
}

function solve(quries) {
	class Trie {
		constructor() {
			this.root = new TrieNode();
			this.total_count = 0;
			this.click_count = 0;
		}

		insert(word) {
			let node = this.root;

			for (const char of word) {
				if (!node.children[char]) {
					node.children[char] = new TrieNode();
				}

				node = node.children[char];
			}

			node.isEnd = true;
			this.total_count++;
		}

		setClickCount(node = this.root) {
			if (node === this.root) {
				for (const key in node.children) {
					node.children[key].needClick = true;
				}
			}

			if (Object.keys(node.children).length > 1) {
				for (const key in node.children) {
					node.children[key].needClick = true;
				}
			}

			if (Object.keys(node.children).length === 1 && node.isEnd) {
				for (const key in node.children) {
					node.children[key].needClick = true;
				}
			}

			for (const key in node.children) {
				this.setClickCount(node.children[key]);
			}
		}

		calculate(node = this.root, count = 0) {
			let nextCount = node.needClick ? count + 1 : count;

			if (node.isEnd) {
				this.click_count += nextCount;
			}

			for (const key in node.children) {
				this, this.calculate(node.children[key], nextCount);
			}
		}
	}

	class TrieNode {
		constructor() {
			this.children = {};
			this.isEnd = false;
			this.needClick = false;
		}
	}

	const answer = [];
	for (const testCase of quries) {
		const trie = new Trie();

		for (const word of testCase) {
			trie.insert(word);
		}

		trie.setClickCount();
		trie.calculate();

		answer.push((trie.click_count / trie.total_count).toFixed(2));
	}

	return answer.join('\n');
}

console.log(solution());
