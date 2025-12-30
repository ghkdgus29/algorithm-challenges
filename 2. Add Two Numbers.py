# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        cur = head
        up = 0

        while l1 is not None or l2 is not None or up > 0: 
            cur.next = ListNode()
            cur = cur.next
            summ = 0
            if l1 is not None:
                summ += l1.val
                l1 = l1.next 
            if l2 is not None:
                summ += l2.val
                l2 = l2.next
            summ += up 
            up = summ // 10
            cur.val = summ % 10
        
        return head.next
                

        
