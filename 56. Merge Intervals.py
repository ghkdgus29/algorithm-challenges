class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: (x[0], x[1]))
        ans = [intervals[0]]
        for s, e in intervals[1:]:
            last_s, last_e = ans[-1]
            if s <= last_e:
                ans[-1] = [last_s, max(e, last_e)]
            else:
                ans.append([s, e])

        return ans
        


                
            

            


