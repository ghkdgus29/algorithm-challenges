class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: (x[0], x[1]))
        ans = [points[0]]
        for s, e in points[1:]:
            last_s, last_e = ans[-1]
            if s <= last_e:
                ans[-1] = [max(last_e, s), min(last_e, e)]
            else:
                ans.append([s, e])
        return len(ans)
        
