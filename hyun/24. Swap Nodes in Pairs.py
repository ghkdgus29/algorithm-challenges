# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        a = []
        while head:
            a.append(head)
            head = head.next
        if not a:
            return None

        for i in range(0, len(a) - 1, 2):
            a[i], a[i + 1] = a[i + 1], a[i]

        for i in range(len(a) - 1):
            a[i].next = a[i + 1]
        a[-1].next = None
        return a[0]
