class MedianFinder:

    def __init__(self):
        self._left = []  # max heap
        self._right = []  # min heap

    def addNum(self, num: int) -> None:
        if len(self._left) == len(self._right):  # left에 넣어야 함
            if self._right and self._right[0] < num:
                pop = heapq.heappop(self._right)
                heapq.heappush(self._right, num)
                heapq.heappush(self._left, -pop)
            else:
                heapq.heappush(self._left, -num)

        else:  # right에 넣어야 함
            if self._left and num < -self._left[0]:
                pop = -heapq.heappop(self._left)
                heapq.heappush(self._left, -num)
                heapq.heappush(self._right, pop)
            else:
                heapq.heappush(self._right, num)

    def findMedian(self) -> float:
        if len(self._left) == len(self._right):
            return (-self._left[0] + self._right[0]) / 2
        return -self._left[0]
