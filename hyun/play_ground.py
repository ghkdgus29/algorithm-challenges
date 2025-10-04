import collections

a = collections.deque()
a.append("1")
a.append("2")
a.append("3")
a.appendleft("0")

print("".join(a))
