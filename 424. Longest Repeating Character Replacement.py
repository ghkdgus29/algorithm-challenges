class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        def is_possible(left, right):
            return right - left - max_cnt <= k

        rank = collections.defaultdict(set)  # count : set(char)
        counter = collections.defaultdict(int)  # char : count

        ans = 0
        right = 0
        max_cnt = 0
        for left in range(len(s)):
            if left > 0:
                removed_char = s[left - 1]
                counter[removed_char] -= 1
                rank[counter[removed_char] + 1].discard(removed_char)
                rank[counter[removed_char]].add(removed_char)
                if not rank[counter[removed_char] + 1]:
                    rank.pop(counter[removed_char] + 1)
                    if counter[removed_char] + 1 == max_cnt:
                        while not rank[max_cnt]:
                            max_cnt -= 1

            while right < len(s) and is_possible(left, right):
                current_char = s[right]
                counter[current_char] += 1
                rank[counter[current_char]].add(current_char)
                rank.get(counter[current_char] - 1, set()).discard(current_char)
                max_cnt = max(max_cnt, counter[current_char])
                ans = max(ans, right - left)

                right += 1

            if right == len(s):
                if is_possible(left, right):
                    ans = max(ans, right - left)
                break
        return ans 

        
