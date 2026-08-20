class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:

        projects = sorted(list(zip(capital, profits)))
        
        profit_candidates = []

        i = 0
        while k > 0:
            while i < len(projects) and projects[i][0] <= w:
                heapq.heappush(profit_candidates, -projects[i][1])
                i += 1 
            if not profit_candidates:
                break 
            w -= heapq.heappop(profit_candidates) 
            k -= 1 
        return w 
