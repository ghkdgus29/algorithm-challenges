class Solution:
    def findMin(self, nums: list[int]) -> int:
        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2

        while left < right:
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
            mid = (left + right) // 2

        return nums[mid]
