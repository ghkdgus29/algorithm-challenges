class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        position = collections.defaultdict(list)
        for idx, n in enumerate(nums):
            if n in position:
                if abs(position[n][-1]-idx) <= k:
                    return True
            position[n].append(idx)
        return False
            
