class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        def str2num(a, idx1, idx2):
            a[idx1], a[idx2] = a[idx2], a[idx1]
            num = int("".join(a))
            a[idx1], a[idx2] = a[idx2], a[idx1]
            return num

        nums = [str(num) for num in nums]
        for i in range(1, len(nums)):
            j = i - 1
            while j >= 0 and str2num(nums, j, j) < str2num(nums, j, j + 1):
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                j -= 1
        return str(int("".join(nums)))
