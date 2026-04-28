class Solution:
    def maxSubarraySumCircular(self, nums: list[int]) -> int:
        min_current = min_sum = 3 * 10**4 + 1
        max_current = max_sum = -3 * 10**4 -1
        total = 0

        for num in nums:
            min_current = min(min_current + num, num)
            min_sum = min(min_current, min_sum)

            max_current = max(max_current + num, num)
            max_sum = max(max_current, max_sum)

            total += num
        if total - min_sum == 0:
            return max_sum

        return max(max_sum, total - min_sum)
