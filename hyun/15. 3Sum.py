class Solution:
    def is_valid(self, num1, num2, last_num, counter):
        # 중복 숫자
        if num1 == last_num or num2 == last_num:
            if num1 == num2 == last_num:
                if counter[last_num] > 2:
                    del counter[last_num]
                    return True
                return False
            elif counter[last_num] > 1:
                return True
            return False
        return True

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        counter = collections.Counter(nums)
        ans = set()

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                last_num = -(nums[i] + nums[j])
                if last_num in counter:
                    if self.is_valid(nums[i], nums[j], last_num, counter):
                        triplet = tuple(sorted([nums[i], nums[j], last_num]))
                        if triplet not in ans:
                            ans.add(triplet)

        return list(ans)
