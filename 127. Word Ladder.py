import collections

from collections import deque

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        def check(word1, word2):
            diff = 0
            for a, b in zip(word1, word2):
                if a!=b :
                    diff += 1
                if diff > 1:
                    return False 
            return True 
        
        visited = set()

        queue = collections.deque([(beginWord, 0)])
        visited.add(beginWord)

        while queue:
            cur, cnt = queue.popleft()
            if cur == endWord:
                return cnt
            for next_word in wordList: 
                if next_word not in visited and check(cur, next_word):
                    visited.add(next_word)
                    queue.append((next_word, cnt + 1))
        
        return 0





class ModelSolution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        # If endWord is not in wordList, return 0
        if endWord not in wordList:
            return 0

        # Set for faster lookups
        wordSet = set(wordList)
        
        # BFS setup
        q = deque([(beginWord, 1)])  # (word, step count)
        visited = set()
        visited.add(beginWord)

        # Perform BFS
        while q:
            current_word, steps = q.popleft()

            # Try all possible transformations
            for i in range(len(current_word)):
                for c in "abcdefghijklmnopqrstuvwxyz":
                    new_word = current_word[:i] + c + current_word[i+1:]
                    
                    if new_word == endWord:
                        return steps + 1
                    
                    if new_word in wordSet and new_word not in visited:
                        visited.add(new_word)
                        q.append((new_word, steps + 1))

        return 0  


        
