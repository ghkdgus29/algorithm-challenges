# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        smaller = []
        ge = []
        cur = head 
        while cur:
            if cur.val < x: 
                smaller.append(cur)
            else:
                ge.append(cur)
            cur = cur.next
        ge.append(None)

        nodes = smaller + ge
        for idx in range(len(nodes) - 1):
            nodes[idx].next = nodes[idx+1]

        return nodes[0]
        
