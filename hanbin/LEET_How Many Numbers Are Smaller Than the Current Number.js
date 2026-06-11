/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	const count = Array(101).fill(0);

	for (let i of nums) {
		count[i]++;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] = count[i - 1] + count[i];
	}

	const result = [];
	for (let i = 0; i < nums.length; i++) {
		result[i] = count[nums[i] - 1] ?? 0;
	}

	return result;
};
