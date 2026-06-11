/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	for (let i of nums) {
		const abs = Math.abs(i);
		nums[abs - 1] = nums[abs - 1] > 0 ? -nums[abs - 1] : nums[abs - 1];
	}

	const result = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result.push(i + 1);
		}
	}

	return result;
};
