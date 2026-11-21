# class Solution:
#     def productExceptSelf(self, nums: list[int]) -> list[int]:
#         length = len(nums)
#         prefix_mult = [1] * length
#         suffix_mult = [1] * length

#         for i in range(length):
#             prefix_mult[i] = prefix_mult[i-1] * nums[i] if i > 0 else nums[i]
#             suffix_mult[length - i - 1] = nums[length - i - 1] * suffix_mult[length - i] if i > 0 else nums[length - i - 1]

#         result = [0] * length

#         for i in range(length):
#             if i == 0:
#                 result[i] = suffix_mult[i + 1]
#                 continue
#             if i == length - 1:
#                 result[i] = prefix_mult[i - 1]
#                 continue
#             result[i] = prefix_mult[i-1] * suffix_mult[i+1]

#         return result
        
        
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        n = len(nums)
        prefix = [1] * n   # prefix[i] = i 앞에 있는 수를 다 곱한 값
        suffix = [1] * n   # suffix[i] = i 뒤에 있는 수를 다 곱한 값

        for i in range(1, n):
            prefix[i] = prefix[i - 1] * nums[i - 1]

        for i in reversed(range(n - 1)):
            suffix[i] = suffix[i + 1] * nums[i + 1]

        return [prefix[i] * suffix[i] for i in range(n)]