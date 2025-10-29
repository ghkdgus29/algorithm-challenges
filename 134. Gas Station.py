class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        subtract = [g - c for g, c in zip(gas, cost)]

        if sum(subtract) < 0: 
            return -1

        start_index = 0
        acc = 0
        for idx in range(len(gas)):   
            acc += subtract[idx]

            if acc < 0:
                start_index = idx+1
                acc = 0

        return start_index
