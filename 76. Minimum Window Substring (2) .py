class Solution:
    def minWindow(self, s: str, t: str) -> str:
        counter = collections.Counter(t)
        left = 0
        need = len(t)
        ans = ""

        for right in range(left, len(s)):
            ch = s[right]
            if ch in counter:
                counter[ch] -= 1
                if counter[ch] >= 0:
                    need -= 1

            while need == 0:
                if ans == "" or len(ans) > len(s[left : right + 1]):
                    ans = s[left : right + 1]

                ch = s[left]
                if ch in counter:
                    counter[ch] += 1
                    if counter[ch] > 0:
                        need += 1
                left += 1

        return ans
