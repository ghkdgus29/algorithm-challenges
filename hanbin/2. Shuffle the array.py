# class Solution:
#     def shuffle(self, nums: List[int], n: int) -> List[int]:
#         result = []

#         for i in range(n):
#             result.append(nums[i])
#             result.append(nums[i+n])
        
#         return result

# class Solution:
#     def shuffle(self, nums: List[int], n: int) -> List[int]:
#         result = []

#         for x, y in zip(nums[:n], nums[n:]):
#             result.append(x)
#             result.append(y)

#         return result

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        result = [val for i in range(n) for val in (nums[i], nums[i+n])]
        return result