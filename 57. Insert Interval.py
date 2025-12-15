class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        if not intervals:
            return [newInterval]
        bisect.insort_left(intervals, newInterval)

        ans = [intervals[0]]
        for s, e in intervals[1:]: 
            prev_s, prev_e = ans[-1]
            if s <= prev_e:
                ans[-1][1] = max(prev_e, e) 
            else: 
                ans.append([s, e])
        
        return ans 
