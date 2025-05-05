const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

class StudentList {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	addFirst(student) {
		if (this.first) {
			const tmp = this.first;
			student.nextStudent = tmp;
			tmp.prevStudent = student;
		}
		this.first = student;
	}

	addLast(student) {
		if (this.last) {
			const tmp = this.last;
			student.prevStudent = tmp;
			tmp.nextStudent = student;
		}
		this.last = student;
	}

	findHeighterStudent(student) {
		let targetStudent = this.first;

		let idx = 0;
		while (targetStudent && targetStudent.height < student.height) {
			idx++;
			targetStudent = targetStudent.nextStudent;
		}

		return [idx, targetStudent];
	}

	addPrev(targetStudent, student) {
		const prevStudent = targetStudent.prevStudent;
		if (prevStudent) {
			prevStudent.nextStudent = student;
			student.prevStudent = prevStudent;
		}

		targetStudent.prevStudent = student;
		student.nextStudent = targetStudent;

		if (this.first === targetStudent) {
			this.first = student;
		}
	}

	addPost(targetStudent, student) {
		const postStudent = targetStudent.nextStudent;
		if (postStudent) {
			postStudent.prevStudent = student;
			student.nextStudent = postStudent;
		}

		targetStudent.nextStudent = student;
		student.prevStudent = targetStudent;

		if (this.last === targetStudent) {
			this.last = student;
		}
	}
}

class Student {
	constructor(height) {
		this.nextStudent = null;
		this.prevStudent = null;
		this.height = height;
	}
}

function solution() {
	let idx = 0;

	const answer = [];

	const T = Number(input[idx++]);
	for (let tc = 0; tc < T; tc++) {
		const [testCaseNumber, ...students] = input[idx++]
			.split(' ')
			.map(Number);

		let result = 0;

		const arr = [];

		for (let i = 0; i < students.length; i++) {
			const studentHeight = students[i];

			let index = 0;
			for (; index < i; index++) {
				if (arr[index] > studentHeight) {
					break;
				}
			}

			arr.splice(index, 0, studentHeight);

			result += arr.length - 1 - index;
		}

		answer.push([testCaseNumber, result]);
	}

	return answer.map((x) => x.join(' ')).join('\n');
}

console.log(solution());
