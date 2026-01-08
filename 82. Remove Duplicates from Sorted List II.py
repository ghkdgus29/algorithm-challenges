# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        new_head = ListNode()
        new_head.next = head 
        prev = new_head 
        cur = head 

        while cur is not None and cur.next is not None: 
            if cur.val == cur.next.val:
                fivot = cur.val 
                while cur is not None and cur.val == fivot:
                    cur = cur.next 
            else:
                prev.next = cur
                prev = cur
                cur = cur.next
        
        prev.next = cur 
        
        return new_head.next
                
