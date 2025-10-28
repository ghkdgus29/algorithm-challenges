class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:
        ans = 0
        counter = collections.Counter(tasks)
        interval_checker = {}
        while counter:
            for job, _ in counter.most_common():
                if job not in interval_checker:  # interval 동안 할 게 있는 경우
                    counter[job] -= 1
                    if counter[job] == 0:
                        del counter[job]
                        break
                    interval_checker[job] = n + 1
                    break

            for job in [k for k in interval_checker]:
                interval_checker[job] -= 1
                if interval_checker[job] == 0:
                    del interval_checker[job]

            ans += 1
        return ans
        
