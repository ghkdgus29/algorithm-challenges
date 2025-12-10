class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        checker = {}
        ans = min(1, len(nums))

        for num in set(nums):
            if num + 1 in checker and num - 1 in checker:  # between in
                if (
                    checker[num - 1][2] == "LEFT" and checker[num + 1][2] == "RIGHT"
                ):  # in the middle
                    continue
                left_num, left_length, left_state = checker[num - 1]
                right_num, right_length, right_state = checker[num + 1]

                if left_state != "ALONE":
                    del checker[num - 1]
                if right_state != "ALONE":
                    del checker[num + 1]

                checker[left_num] = (right_num, left_length + right_length + 1, "LEFT")
                checker[right_num] = (left_num, left_length + right_length + 1, "RIGHT")
                ans = max(ans, left_length + right_length + 1)

            elif num + 1 in checker:  # left in
                opposite, length, state = checker[num + 1]
                if state != "ALONE":
                    del checker[num + 1]

                checker[opposite] = (num, length + 1, "RIGHT")
                checker[num] = (opposite, length + 1, "LEFT")
                ans = max(ans, length + 1)

            elif num - 1 in checker:  # right in
                opposite, length, state = checker[num - 1]
                if state != "ALONE":
                    del checker[num - 1]

                checker[opposite] = (num, length + 1, "LEFT")
                checker[num] = (opposite, length + 1, "RIGHT")
                ans = max(ans, length + 1)
            else:
                checker[num] = (num, 1, "ALONE")

        return ans


class BetterSolution:
    def longestConsecutive(self, nums: list[int]) -> int:
        nums = set(nums)
        ans = 0
        for num in nums:
            n = num
            if num - 1 not in nums:
                c = 0
                while n in nums:
                    c += 1
                    n += 1
                ans = max(ans, c)
        return ans
