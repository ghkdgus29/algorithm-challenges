class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        dic = {num: idx for idx, num in enumerate(numbers)}

        for idx, num in enumerate(numbers):
            if target - num in dic:
                return sorted([idx + 1, dic[target - num] + 1])
