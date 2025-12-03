class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        checker = collections.defaultdict(list)
        for idx, num in enumerate(nums):
            if target - num in checker:
                return [checker[target-num].pop(), idx]

            checker[num].append(idx)
        


        
