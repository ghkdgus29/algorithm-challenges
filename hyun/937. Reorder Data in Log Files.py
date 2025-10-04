class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        # letter log first
        # sort
        ## letter log abc순 -> identifier abc순
        ## digit log는 그대로

        letter_logs = []
        digit_logs = []
        for log in logs:
            if log.split()[1].isalpha():
                letter_logs.append(log)
            else:
                digit_logs.append(log)

        letter_logs.sort(key=lambda x: (x.split()[1:], x.split()[0]))
        return letter_logs + digit_logs
