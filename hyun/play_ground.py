a = [1, 2, 3]

b = "".join(a)
print(b)


def swap(a):
    a[0], a[1] = a[1], a[0]


swap(a)
print(a)
