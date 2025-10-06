# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(
        self, head: Optional[ListNode], left: int, right: int
    ) -> Optional[ListNode]:
        a = []
        while head:
            a.append(head)
            head = head.next

        a[left - 1 : right] = a[left - 1 : right][::-1]
        for i in range(len(a) - 1):
            a[i].next = a[i + 1]
        a[-1].next = None
        return a[0]
