class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        h = []
        for num in nums:
            heapq.heappush(h, -num)
        for _ in range(k - 1):
            heapq.heappop(h)
        return -heapq.heappop(h)
