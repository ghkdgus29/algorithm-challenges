import collections

a = [1, 1, 2, 2, 3, 4]
counter = collections.Counter(a)
print(counter.most_common(2))
