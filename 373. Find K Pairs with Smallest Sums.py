class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        heap = []
        ans = []

        for num in nums1:
            heapq.heappush(heap, (num + nums2[0], 0))

        while k > 0:
            summ, pos = heapq.heappop(heap)

            num1 = summ - nums2[pos]
            ans.append((num1, nums2[pos]))

            if pos < len(nums2)-1:
                heapq.heappush(heap, (num1 + nums2[pos + 1], pos + 1))

            k -= 1

        return ans
