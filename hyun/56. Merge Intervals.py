class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        ans = []

        ans.append(intervals[0])
        for s, e in intervals[1:]:
            prev_s, prev_e = ans[-1]
            if prev_e >= s:
                ans[-1][1] = max(e, prev_e)
            else:
                ans.append([s, e])

        return ans
