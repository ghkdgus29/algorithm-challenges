class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        j_set = set(list(jewels))

        return sum([1 for ch in stones if ch in j_set])
