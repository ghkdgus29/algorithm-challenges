class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        # 더 작은쪽을 기준으로 이진 탐색 
        # 기준점은 첫 번째 배열 
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)
        
        left = 0
        right = len(nums1)

        while left <= right:
            partition1 = (left + right) // 2
            # partition2 + partition1 = (len(nums1) + len(nums2) + 1) // 2   ,, 홀수인 경우 왼쪽 파티션에 한 개 더 넣어주려고 +1
            partition2 = (len(nums1) + len(nums2) + 1) // 2 - partition1

            max_left1 = float("-inf") if partition1 == 0 else nums1[partition1 - 1]
            min_right1 = float("inf") if partition1 == len(nums1) else nums1[partition1]

            max_left2 = float("-inf") if partition2 == 0 else nums2[partition2 - 1]
            min_right2 = float("inf") if partition2 == len(nums2) else nums2[partition2]

            if max_left1 <= min_right2 and max_left2 <= min_right1:
                if (len(nums1) + len(nums2)) % 2 == 0:  # 짝수
                    return (
                        max(max_left1, max_left2) + min(min_right1, min_right2)
                    ) / 2
                else:  # 홀수
                    return max(max_left1, max_left2)
            elif max_left1 > min_right2:
                right = partition1 - 1
            else:
                left = partition1 + 1
