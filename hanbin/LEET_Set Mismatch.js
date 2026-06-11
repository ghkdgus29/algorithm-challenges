/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	const set = new Set();

	const result = [];

	for (let i of nums) {
		if (set.has(i)) {
			result[0] = i;
		} else {
			set.add(i);
		}
	}

	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) {
			result[1] = i;
		}
	}

	return result;
};
