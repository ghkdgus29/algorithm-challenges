class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        mapper = {
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

        def pick(idx, word):
            if idx == len(digits):
                ans.append("".join(word))
                return

            for ch in mapper[digits[idx]]:
                pick(idx + 1, word + [ch])

        pick(0, [])
        return ans 
