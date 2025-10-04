class Solution:
    def longestPalindrome(self, s: str) -> str:
        # two pointer?

        ans = ""

        for i in range(len(s)):
            # odd palindrome
            current = collections.deque([s[i]])
            j = i + 1
            while j < len(s) and i - (j - i) >= 0:
                if s[j] != s[i - (j - i)]:
                    break
                current.appendleft(s[i - (j - i)])
                current.append(s[j])
                j += 1
            if len(ans) < len(current):
                ans = "".join(current)

            # even palindrome
            if i + 1 < len(s) and s[i] == s[i + 1]:
                current = collections.deque([s[i], s[i + 1]])
                j = i + 2
                while j < len(s) and i - (j - (i + 1)) >= 0:
                    if s[j] != s[i - (j - (i + 1))]:
                        break
                    current.appendleft(s[i - (j - (i + 1))])
                    current.append(s[j])
                    j += 1
                if len(ans) < len(current):
                    ans = "".join(current)

        return ans
