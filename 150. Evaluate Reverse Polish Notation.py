class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        def calculate(op, l, r):
            if op == '+':
                return l + r 
            if op == '-':
                return l - r
            if op == '*':
                return l * r
            if op == '/':
                return int(l / r)

        stack = []

        for token in tokens:
            if token in {"+", "-", "*", "/"}:
                r = stack.pop()
                l = stack.pop()
                stack.append(calculate(token, l, r))
            else:
                stack.append(int(token))
        
        return stack.pop()
    
