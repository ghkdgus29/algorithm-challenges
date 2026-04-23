# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None

        nodes = []
        for head in lists:
            while head:
                nodes.append(head)
                head = head.next
        if not nodes:
            return None
        
        nodes.sort(key=lambda x:x.val)

        for i in range(len(nodes)-1):
            nodes[i].next = nodes[i+1]
        nodes[-1].next = None
        return nodes[0]
        
