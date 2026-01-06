# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        def is_possible(cur):
            left = cur 
            for _ in range(k-1):
                if cur is None: 
                    return False, left, None, None
                cur = cur.next 
            if cur is None: 
                return False, left, None, None
            return True, left, cur, cur.next if cur else None
        
        if k == 1:
            return head
        
        new_head = ListNode()
        new_head.next = head
        left_bef = new_head
        cur = head

        while True:
            possiblity, left, right, right_af = is_possible(cur)
            if not possiblity:
                break 

            prev = None 
            for _ in range(k):
                nxt = cur.next 
                cur.next = prev 
                prev = cur 
                cur = nxt
            left_bef.next = right
            left.next = right_af
            cur = right_af
            left_bef = left

        return new_head.next
