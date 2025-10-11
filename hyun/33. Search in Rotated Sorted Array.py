class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # nums[i] = nums[i+k]
        # [6, 7, 0, 1, 2]

        def correct():
            left = 0
            right = len(nums) - 1
            while left < right:
                mid = (left + right) // 2
                if nums[mid] > nums[right]:
                    left = mid + 1
                else:
                    right = mid
            return left

        offset = correct()

        correct_nums = nums[offset:] + nums[:offset]

        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if correct_nums[mid] == target:
                return (mid + offset) % len(nums)
            elif correct_nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return -1
