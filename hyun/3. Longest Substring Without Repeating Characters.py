class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        deque = collections.deque()
        have = set()
        ans = 0

        for ch in s:
            while deque and ch in have:
                have.discard(deque.popleft())
            have.add(ch)
            deque.append(ch)
            ans = max(ans, len(deque))
        return ans
