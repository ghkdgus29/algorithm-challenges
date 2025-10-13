class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        def dec2bin(num):
            tmp = []
            while num > 0:
                tmp.append(str(num % 2))
                num //= 2
            return "".join(tmp[::-1]).zfill(8)
        
        def is_valid(bins):
            start = bins[0]
            rest_byte = -1
            if start[0] == '0':
                rest_byte = 0
            elif start[:3] == '110':
                rest_byte = 1
            elif start[:4] == '1110':
                rest_byte = 2
            elif start[:5] == '11110':
                rest_byte = 3
            
            if rest_byte == -1 or len(bins) < rest_byte: 
                return False, []
            
            for b in bins[1:rest_byte+1]:
                if not b.startswith("10"):
                    return False, []
            
            return True, bins[rest_byte+1:]
                        


        binaries = [dec2bin(i) for i in data]
        
        while binaries:
            flag, binaries = is_valid(binaries)

            if not flag:
                return False
        
        return True
            