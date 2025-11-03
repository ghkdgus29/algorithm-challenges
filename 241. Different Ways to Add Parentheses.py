class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        def compute(left, right, op):
            results = []
            for l in left:
                for r in right:
                    results.append(eval(str(l) + op + str(r)))
            
            return results
        
        if expression.isdigit():
            return [int(expression)]
        
        ans = []
        for index, val in enumerate(expression):
            if val in "-*+":
                left = self.diffWaysToCompute(expression[:index])
                right = self.diffWaysToCompute(expression[index+1:])

                ans.extend(compute(left, right, val))
        return ans
