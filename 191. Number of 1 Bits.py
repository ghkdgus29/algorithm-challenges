class Solution:
    def hammingWeight(self, n: int) -> int:
        def dec2bin(num):
            tmp = []
            while num > 0:
                tmp.append(num % 2)
                num //= 2
            return tmp
        
        return sum(dec2bin(n))
            
