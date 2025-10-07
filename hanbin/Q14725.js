const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const quries = input.slice(idx).map((x) => x.trim());

	return { N, quries };
}

function solve({ N, quries }) {
	class Trie {
		constructor() {
			this.root = new TrieNode();
		}

		insert(word_array) {
			let current_node = this.root;

			for (const word of word_array) {
				if (!current_node.children[word]) {
					current_node.children[word] = new TrieNode(
						word,
						current_node.level + 1
					);
				}

				current_node = current_node.children[word];
			}
		}

		toString() {
			const string = [];
			const stack = [];

			stack.push(this.root);

			while (stack.length !== 0) {
				let node = stack.pop();
				const word = node.word;
				if (word) {
					string.push(node.toString());
				}

				const order_array = Object.keys(node.children).sort((a, b) =>
					b.localeCompare(a)
				);

				for (const next of order_array) {
					stack.push(node.children[next]);
				}
			}

			return string.join('\n');
		}
	}

	class TrieNode {
		constructor(word = '', level = -1) {
			this.children = {};
			this.word = word;
			this.level = level;
		}

		toString() {
			return this.#_getPrefix() + this.word;
		}

		#_getPrefix() {
			return '--'.repeat(this.level);
		}
	}

	const trie = new Trie();

	for (const query of quries) {
		let [_, ...word_array] = query.split(' ');
		trie.insert(word_array);
	}

	return trie.toString();
}

console.log(solution());
