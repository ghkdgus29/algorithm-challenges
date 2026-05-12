class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        if not nums:
            return [-1, -1]

        # find lower bound
        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2
        while left < right:
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
            mid = (left + right) // 2
        lower = right if nums[right] == target else -1

        # find upper bound
        if nums[-1] == target:
            upper = len(nums) - 1
        else:
            left = 0
            right = len(nums) - 1
            mid = (left + right) // 2
            while left < right:
                if nums[mid] <= target:
                    left = mid + 1
                else:
                    right = mid
                mid = (left + right) // 2
            upper = right - 1 if nums[right - 1] == target else -1

        return [lower, upper]
