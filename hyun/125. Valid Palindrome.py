class Solution:
    def isPalindrome(self, s: str) -> bool:
        # lowercase -> alphanumeric only
        # check valid palindrome

        processed_s = []
        for ch in s:
            if ch.isalnum():
                processed_s.append(ch.lower())

        processed_s = "".join(processed_s)

        return processed_s == processed_s[::-1]
