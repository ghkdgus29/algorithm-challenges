function solution(bridge_length, weight, truck_weights) {
	var answer = 0;

	const left_trucks = new Queue();
	for (const truck of truck_weights) {
		left_trucks.push(new Truck(truck, 0));
	}

	const bridge = new Queue();

	while (!(left_trucks.isEmpty() && bridge.isEmpty())) {
		// 빼기
		const cur = bridge.peek();
		if (cur?.distance === 0) {
			bridge.poll();
		}

		// 깎기
		for (let i = 0; i < bridge.length; i++) {
			const truck = bridge.poll();
			truck.distance--;
			bridge.push(truck);
		}

		// 올리기
		const next_truck = left_trucks.peek();
		if (
			next_truck &&
			bridge.length < bridge_length &&
			bridge.canLoad(next_truck.weight, weight)
		) {
			next_truck.distance = bridge_length - 1;
			bridge.push(next_truck);
			left_trucks.poll();
		}

		answer++;
	}

	return answer;
}

class Queue {
	constructor() {
		this.storage = {};
		this.head = -1;
		this.tail = -1;
		this.total_weight = 0;
	}

	push(val) {
		this.storage[++this.tail] = val;
		this.total_weight += val.weight;
	}

	poll() {
		if (this.isEmpty()) return undefined;
		this.total_weight -= this.storage[this.head + 1].weight;
		return this.storage[++this.head];
	}

	isEmpty() {
		return this.head === this.tail;
	}

	canLoad(weight, limit_weight) {
		return weight + this.total_weight <= limit_weight;
	}

	peek() {
		if (this.isEmpty()) return undefined;
		return this.storage[this.head + 1];
	}

	get length() {
		return this.tail - this.head;
	}
}

class Truck {
	constructor(weight, distance) {
		this.weight = weight;
		this.distance = distance;
	}
}
