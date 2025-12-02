class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sorted_strs = [''.join(sorted(s)) for s in strs]
        checker = collections.defaultdict(list)

        for idx, ss in enumerate(sorted_strs):
            checker[ss].append(strs[idx])
        
        return list(checker.values())
        
