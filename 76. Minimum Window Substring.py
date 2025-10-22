class Solution:
    def minWindow(self, s: str, t: str) -> str:
        start_idx = 0
        end_idx = 0
        min_length = sys.maxsize
        needed_chars = collections.Counter(t)
        need = len(t)
        right = -1
        for left in range(len(s)):

            if left > 0 and s[left - 1] in needed_chars:
                needed_chars[s[left - 1]] += 1
                if needed_chars[s[left - 1]] > 0:
                    need += 1

            while right < len(s) - 1 and need > 0:
                right += 1
                if s[right] in needed_chars:
                    needed_chars[s[right]] -= 1
                    if needed_chars[s[right]] >= 0:
                        need -= 1

            if need == 0:
                if right - left + 1 < min_length:
                    min_length = right - left + 1
                    start_idx = left
                    end_idx = right + 1

        return s[start_idx:end_idx]

        
