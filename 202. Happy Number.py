class Solution:
    def isHappy(self, n: int) -> bool:
        checker = set()

        num = 0 
        for i in map(int, list(str(n))):
            num += i**2

        while num not in checker:
            if num == 1:
                return True
            checker.add(num)
            next_num = 0 
            for i in map(int, list(str(num))):
                next_num += i ** 2
            num = next_num
        return False
