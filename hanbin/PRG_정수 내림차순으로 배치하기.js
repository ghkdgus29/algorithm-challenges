function solution(n) {
	var answer = '';

	const arr = String(n).split('');
	arr.sort((a, b) => b - a);
	answer = Number(arr.join(''));

	return answer;
}
