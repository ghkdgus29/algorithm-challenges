# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        a = []
        while head:
            a.append(head)
            head = head.next
        
        a.pop(len(a)-n)

        for i in range(len(a)-1):
            a[i].next = a[i+1]
        
        if a:
            a[-1].next = None
            return a[0]
        
            

        
