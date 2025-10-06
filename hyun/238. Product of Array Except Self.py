class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # [1, 2, 6, 24]
        # [24, 24, 12, 4]

        # [-1, -1, 0, 0, 0]
        # [0, 0, 0, -9, 3]

        # fivot idx left, right product = answer

        prefix = [1]
        for num in nums:
            prefix.append(prefix[-1] * num)

        suffix = [1]
        for num in nums[::-1]:
            suffix.append(suffix[-1] * num)
        suffix = suffix[::-1]

        ans = []
        for i in range(len(nums)):
            ans.append(prefix[i] * suffix[i + 1])
        return ans
