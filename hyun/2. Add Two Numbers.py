# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        ori = head = ListNode()
        carry = 0
        while l1 or l2 or carry != 0:
            summ = carry
            if l1:
                summ += l1.val
                l1 = l1.next
            if l2:
                summ += l2.val
                l2 = l2.next

            carry = summ // 10
            head.next = ListNode(val=summ % 10)
            head = head.next
        return ori.next
