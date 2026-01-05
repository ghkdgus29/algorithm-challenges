# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        cur = head
        prev = None
        idx = 1 
        left_before = right_after = None
        left_node = right_node = None
        reverse_flag = False
        while cur:
            
            if idx == left: 
                left_before = prev  
                left_node = cur 
                reverse_flag = True
            

            if reverse_flag:
                nxt = cur.next 
                right_after = nxt 
                right_node = cur
                cur.next = prev 
                prev = cur 
                cur = nxt 
                if idx == right:
                    break
            else:
                prev = cur
                cur = cur.next
            
            idx += 1
        
        if left_before:
            left_before.next = right_node 
        else: 
            head = right_node
        left_node.next = right_after

        return head
        
