class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []

        len_word1 = len(word1)
        len_word2 = len(word2)

        for i in range(max(len_word1, len_word2)):
            if i < len_word1: result.append(word1[i])
            if i < len_word2: result.append(word2[i])

        return "".join(result)

        