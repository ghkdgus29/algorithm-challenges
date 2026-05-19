function solution(order) {
	var answer = 0;

	let order_idx = 0;
	const temporary_stack = [];

	for (let i = 1; i <= order.length; i++) {
		if (order_idx >= order.length) break;

		let should_contain = false;
		if (i === order[order_idx]) {
			answer++;
			order_idx++;
		} else {
			should_contain = true;
		}

		while (temporary_stack.length > 0) {
			const temporary = temporary_stack[temporary_stack.length - 1];

			if (temporary === order[order_idx]) {
				answer++;
				order_idx++;
				temporary_stack.pop();
			} else {
				break;
			}
		}

		if (should_contain) {
			temporary_stack.push(i);
		}
	}

	return answer;
}
