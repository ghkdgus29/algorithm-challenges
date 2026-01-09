# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        a = []
        cur = head
        while cur:
            a.append(cur)
            cur = cur.next
        
        if len(a) <= 1 or (k % len(a))==0:
            return head
        
        start = len(a) - (k % len(a))
        a[start - 1].next = None

        cur = start
        for _ in range(len(a)-1): 
            a[cur % len(a)].next = a[(cur + 1) % len(a)]
            cur += 1
        
        return a[start]
