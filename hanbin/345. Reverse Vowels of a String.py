class Solution:
    def reverseVowels(self, s: str) -> str:
        vowel_list = set('aeiouAEIOU')
        vowels = []

        for i, v in enumerate(s):
            if v in vowel_list:
                vowels.append(v)

        result = ""

        for i, v in enumerate(s):
            if v in vowel_list:
                result += vowels.pop()
            else:
                result += v

        return result