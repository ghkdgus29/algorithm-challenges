class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        a = sorted(nums, reverse=True)
        return sum(a[1::2])
