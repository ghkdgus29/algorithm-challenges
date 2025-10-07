const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

function init() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = input.slice(idx).map((x) => x.trim());
	return arr;
}

function solve(arr) {
	class Trie {
		constructor() {
			this.root = new TrieNode();
			this.map = new Map();
		}

		insert(word) {
			let node = this.root;
			let result = '';
			let alias = '';

			for (const char of word) {
				alias += char;
				if (!node.children[char]) {
					node.children[char] = new TrieNode();
					if (!result) result = alias;
				}

				node = node.children[char];
			}
			if (!result) result = alias;

			const count = this.map.get(alias);
			if (count) {
				result += count + 1;
			}

			this.map.set(alias, (count ?? 0) + 1);
			return result;
		}
	}
	class TrieNode {
		constructor() {
			this.children = {};
		}
	}

	const trie = new Trie();
	const answer = [];
	for (const nickname of arr) {
		answer.push(trie.insert(nickname));
	}

	return answer.join('\n');
}

console.log(solution());
