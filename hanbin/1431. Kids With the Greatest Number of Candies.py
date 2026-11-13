class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_count = max(candies)
        
        # results = [i + extraCandies >= max_count for i in candies]
        results = list(map(lambda x: x + extraCandies >= max_count, candies))
        return results