class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        result = 0

        for i, v in enumerate(flowerbed):
            if v == 1:
                continue

            left_check = i == 0 or flowerbed[i-1] == 0
            right_check = i == len(flowerbed) - 1 or flowerbed[i+1] == 0
            
            if (left_check and right_check):
                flowerbed[i] = 1
                result += 1
        
        return result >= n
        