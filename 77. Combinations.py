class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def combi(n, k):
            cases = []
            def go(idx, pick):
                if len(pick) == k:
                    cases.append(pick)
                    return 
                if idx == n + 1:
                    return 
                
                go(idx + 1, pick + [idx])
                go(idx + 1, pick)
            go(1, [])
            return cases
        
        return combi(n, k)



        
