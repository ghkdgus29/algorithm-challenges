class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0

        # left -> right (include equal height)
        prev_h = 0
        prev_idx = 0
        minus = 0
        for idx, h in enumerate(height):
            if prev_h <= h:
                ans += prev_h * (idx - prev_idx - 1) - minus
                minus = 0
                prev_idx = idx
                prev_h = h
            else:
                minus += h

        # right -> left
        prev_h = 0
        prev_idx = len(height)
        minus = 0
        for idx in range(len(height) - 1, -1, -1):
            h = height[idx]
            if prev_h < h:
                ans += prev_h * (prev_idx - idx - 1) - minus
                minus = 0
                prev_idx = idx
                prev_h = h
            else:
                minus += h

        return ans
