class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dictionary = collections.defaultdict(list)
        for idx, num in enumerate(nums):
            dictionary[num].append(idx)

        for num in nums:
            if target - num in dictionary:
                if target - num == num:
                    if len(dictionary[target - num]) > 1:
                        return dictionary[target - num]
                    continue
                return [*dictionary[target - num], *dictionary[num]]
