class Solution:
    def search(self, nums: list[int], target: int) -> int:

        # find offset
        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2
        while left < right:
            if nums[mid] < nums[right]:
                right = mid
            else:
                left = mid + 1
            mid = (left + right) // 2

        offset = right

        # find target
        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2
        while left < right:
            if target < nums[(mid + offset) % len(nums)]:
                right = mid - 1
            elif target > nums[(mid + offset) % len(nums)]:
                left = mid + 1
            else:
                break
            mid = (left + right) // 2

        if nums[(mid + offset) % len(nums)] != target:
            return -1
        return (mid + offset) % len(nums)
