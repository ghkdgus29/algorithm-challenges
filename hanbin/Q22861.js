const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	return solve(init());
}

const TYPE = {
	FILE: '0',
	FOLDER: '1',
};

function init() {
	class Node {
		type;
		child = {};
		fileCount = 0;
		fileTypes = 0;

		constructor(type) {
			this.type = type;
		}

		getChildren(name) {
			return this.child[name];
		}
	}

	let idx = 0;
	const [N, M] = input[idx++].split(' ').map(Number);

	const nodeMap = new Map();

	const main = new Node('1');
	nodeMap.set('main', main);

	for (let i = 0; i < N + M; i++) {
		const [parent, children, isFolder] = input[idx++].trim().split(' ');

		const childNode = nodeMap.get(children) ?? new Node(isFolder);
		const parentNode = nodeMap.get(parent) ?? new Node('1');
		parentNode.child[children] = childNode;

		if (!nodeMap.get(children)) {
			nodeMap.set(children, childNode);
		}

		if (!nodeMap.get(parent)) {
			nodeMap.set(parent, parentNode);
		}
	}

	const m = Number(input[idx++]);
	const moves = [];
	for (let i = 0; i < m; i++) {
		moves.push(input[idx++].trim().split(' '));
	}

	const Q = Number(input[idx++]);
	const queries = [];
	for (let i = 0; i < Q; i++) {
		queries.push(input[idx++].trim());
	}

	return { nodeMap, moves, queries };
}

function solve({ nodeMap, moves, queries }) {
	const main = nodeMap.get('main');

	for (const move of moves) {
		const [f, t] = move;

		const fromNode = findNode(f);
		const toNode = findNode(t);

		for (const children in fromNode.child) {
			toNode.child[children] = fromNode.child[children];
		}

		fromNode.child = {};
	}

	const fileMap = new Map();
	const fileCountMap = new Map();
	dfs('main', main, fileMap, fileCountMap);

	function findNode(dir) {
		const path = dir.split('/');
		let cur = nodeMap.get('main');

		for (let i = 1; i < path.length; i++) {
			let curPath = path[i];

			cur = cur.getChildren(curPath);
		}

		return cur;
	}

	function dfs(dir, node, fileMap, fileCountMap) {
		const fileSet = new Set();
		let fileCount = 0;

		for (let key in node.child) {
			const curNode = node.getChildren(key);

			if (curNode.type === TYPE.FILE) {
				fileCount++;
				fileSet.add(key);
			} else {
				const nextDir = dir + '/' + key;
				dfs(nextDir, curNode, fileMap, fileCountMap);

				fileCount += fileCountMap.get(nextDir);
				for (const name of fileMap.get(nextDir)) {
					fileSet.add(name);
				}
			}
		}

		fileMap.set(dir, fileSet);
		fileCountMap.set(dir, fileCount);
	}

	const result = [];

	for (const q of queries) {
		result.push([fileMap.get(q).size, fileCountMap.get(q)]);
	}

	return result.map((x) => x.join(' ')).join('\n');
}

console.log(solution());
