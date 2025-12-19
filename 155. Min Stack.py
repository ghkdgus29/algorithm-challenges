class MinStack:

    def __init__(self):
        self._stack = []
        self._min_stack = []

    def push(self, val: int) -> None:
        self._stack.append(val)
        self._min_stack.append(min(val, self._min_stack[-1] if self._min_stack else val))

    def pop(self) -> None:
        self._min_stack.pop()
        return self._stack.pop()

    def top(self) -> int:
        return self._stack[-1]

    def getMin(self) -> int:
        return self._min_stack[-1]
        
