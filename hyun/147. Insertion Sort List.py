# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes = []
        while head:
            nodes.append(head)
            head = head.next

        if not nodes:
            return

        for i in range(1, len(nodes)):
            fivot_node = nodes[i]
            j = i - 1
            while j >= 0 and nodes[j].val > fivot_node.val:
                nodes[j + 1], nodes[j] = nodes[j], nodes[j + 1]
                j -= 1

        for i in range(len(nodes) - 1):
            nodes[i].next = nodes[i + 1]
        nodes[-1].next = None
        return nodes[0]
