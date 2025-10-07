const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const [N, M] = input[idx++].split(' ').map(Number);
	const set = [];
	const words = [];

	for (let i = 0; i < N; i++) {
		set.push(input[idx++].trim());
	}

	for (let i = 0; i < M; i++) {
		words.push(input[idx++].trim());
	}

	return { set, words };
}

function solve({ set, words }) {
	class Trie {
		constructor() {
			this.root = new TrieNode();
		}

		insert(word) {
			let node = this.root;

			for (const character of word) {
				if (!node.children[character]) {
					node.children[character] = new TrieNode();
				}

				node = node.children[character];
			}
		}

		search(word) {
			let node = this.root;

			for (const character of word) {
				if (!node.children[character]) return false;

				node = node.children[character];
			}

			return true;
		}
	}

	class TrieNode {
		constructor() {
			this.children = {};
		}
	}

	const trie = new Trie();

	for (const word of set) {
		trie.insert(word);
	}

	let answer = 0;

	for (const word of words) {
		answer += trie.search(word);
	}

	return answer;
}

console.log(solution());
