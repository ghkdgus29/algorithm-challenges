class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        def is_peak(mid: int) -> bool:
            bigger_than_left = bigger_than_right = False
            if mid == 0:
                bigger_than_left = True 
            if mid == len(nums) - 1:
                bigger_than_right = True
            
            if mid > 0 and nums[mid - 1] < nums[mid]:
                bigger_than_left = True 
            if mid < len(nums) - 1 and nums[mid] > nums[mid+1]:
                bigger_than_right = True

            return bigger_than_left and bigger_than_right



        if len(nums) == 1:
            return 0

        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2
        while not is_peak(mid):
            if mid > 0 and nums[mid - 1] > nums[mid]: 
                right = mid - 1
            else:
                left = mid + 1
            mid = (left + right) // 2
            
        return mid

        


