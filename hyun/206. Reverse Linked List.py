# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        a = []

        while head:
            a.append(head)
            head = head.next

        if not a:
            return

        for i in range(len(a) - 1, 0, -1):
            a[i].next = a[i - 1]
        a[0].next = None
        return a[-1]
