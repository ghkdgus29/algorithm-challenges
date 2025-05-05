const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

function solution() {
	let idx = 0;
	const N = Number(input[idx++]);
	const arr = [];
	const channel = {};

	for (let i = 0; i < N; i++) {
		switch (input[idx++].trim()) {
			case 'KBS1':
				channel.KBS1 = { order: i };
				break;
			case 'KBS2':
				channel.KBS2 = { order: i };
				break;
		}
	}

	const answer = [];

	function setOrder(channelName, targetOrder) {
		let order = channel[channelName].order;

		if (channelName === 'KBS2' && order < channel.KBS1.order) {
			order++;
		}
		const diff = order - targetOrder;

		answer.push('1'.repeat(order));
		answer.push('4'.repeat(diff));
	}

	answer.push(setOrder('KBS1', 0));
	answer.push(setOrder('KBS2', 1));

	return answer.join('');
}

console.log(solution());
