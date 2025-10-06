# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        a = []
        for head in lists:
            while head:
                a.append(head)
                head = head.next

        if not a:
            return

        a.sort(key=lambda n: n.val)

        for i in range(len(a) - 1):
            a[i].next = a[i + 1]
        a[-1].next = None
        return a[0]
