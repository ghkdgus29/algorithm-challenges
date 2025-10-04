class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # [sorted, index]

        dictionary = collections.defaultdict(list)
        for i, word in enumerate(strs):
            dictionary["".join(sorted(word))].append(i)

        ans = []
        for chunks in dictionary.values():
            ans.append([strs[i] for i in chunks])
        return ans
