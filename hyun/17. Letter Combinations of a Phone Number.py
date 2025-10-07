class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        dic = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        ans = []

        def make(idx, letter):
            if len(digits) == len(letter):
                ans.append(letter)
                return

            for ch in dic[digits[idx]]:
                make(idx + 1, letter + ch)

        if not digits:
            return ans

        make(0, "")
        return ans
