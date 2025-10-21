class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        window = set()
        queue = collections.deque()
        heap = []

        for i in range(k):
            window.add((-nums[i], i))
            heapq.heappush(heap, (-nums[i], i))
            queue.append((-nums[i], i))

        ans = [-heap[0][0]]

        for i in range(k, len(nums)):
            out = queue.popleft()
            window.discard(out)

            window.add((-nums[i], i))
            heapq.heappush(heap, (-nums[i], i))
            queue.append((-nums[i], i))

            while heap and heap[0] not in window:
                heapq.heappop(heap)

            ans.append(-heap[0][0])

        return ans
