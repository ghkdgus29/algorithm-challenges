class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        size = len(words[0])
        ans = []
        for offset in range(size):
            queue = collections.deque([])
            counter = collections.Counter(words)
            need = len(words)
            left = offset
            while left <= len(s) - size * len(words):
                for right in range(left+size, len(s)+1, size):
                    current_chunk = s[right-size: right]
                    if current_chunk not in counter:
                        queue = collections.deque([])
                        counter = collections.Counter(words)
                        need = len(words)
                        left = right
                        break
                    else:
                        if counter[current_chunk] == 0:
                            pop = queue.popleft()
                            while queue and pop != current_chunk:
                                counter[pop] += 1
                                need += 1
                                left += size
                                pop = queue.popleft()
                            left += size
                            counter[pop] += 1
                            need += 1

                        need -= 1
                        counter[current_chunk] -= 1
                        queue.append(current_chunk)
                        if need == 0:
                            ans.append(left)
                            counter[queue.popleft()] += 1
                            need += 1
                            left += size 
        
        return ans 


                
                
            

                    
                









        
