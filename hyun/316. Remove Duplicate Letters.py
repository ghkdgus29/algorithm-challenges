class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        counter, seen, stack = collections.Counter(s), set(), []

        for ch in s:
            counter[ch] -= 1

            if ch in seen:
                continue

            while stack and stack[-1] > ch and counter[stack[-1]] > 0:
                seen.remove(stack.pop())
            stack.append(ch)
            seen.add(ch)

        return "".join(stack)
