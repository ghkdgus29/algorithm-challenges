# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head 

        mid = end = head 
        cnt = 1
        while True:
            if end.next is None or end.next.next is None:
                tmp = mid.next 
                if head != mid:
                    mid.next = None
                mid = tmp 
                break 
            end = end.next.next
            mid = mid.next
            cnt += 2
        if cnt < 2:
            if head.next is None or head.val < head.next.val:
                return head 
            else:
                tmp = head.next
                head.next.next = head 
                head.next = None
                return tmp
        
        left = self.sortList(head)
        right = self.sortList(mid)
        root = ListNode(-1)
        cur = root
        while left is not None and right is not None:
            if left.val < right.val:
                cur.next = left
                left = left.next 
            else:
                cur.next = right
                right = right.next
            cur = cur.next
        while left is not None:
            cur.next = left
            left = left.next
            cur = cur.next 
        while right is not None:
            cur.next = right
            right = right.next
            cur = cur.next

        return root.next 

             
