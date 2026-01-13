class Node:
    
    def __init__(self, key=None,val=None, next=None, prev=None):
        self.key = key
        self.val = val
        self.next = next 
        self.prev = prev

class LRUCache:

    def __init__(self, capacity: int):
        self._capacity = capacity
        self._size = 0
        self._pointer = {}
        self._head = Node()
        self._tail = Node()

        self._head.next, self._tail.prev = self._tail, self._head 
        

    def get(self, key: int) -> int:
        if key not in self._pointer:
            return -1
        
        pick_node = self._pointer[key]
        self._set_recent(pick_node)

        return pick_node.val
        

    def put(self, key: int, value: int) -> None:
        if key in self._pointer:
            self._pointer[key].val = value
            self._set_recent(self._pointer[key])
            return 
        
        new_node = Node(key=key, val=value)
        self._pointer[key] = new_node
        self._head.next, new_node.next = new_node, self._head.next
        new_node.prev, new_node.next.prev = self._head, new_node

        if self._size == self._capacity:
            remove_node = self._tail.prev
            self._pointer.pop(remove_node.key)
            remove_node.prev.next, self._tail.prev = self._tail, remove_node.prev
            self._size -= 1
        
        self._size += 1

    def _set_recent(self, pick_node):
        pick_node.prev.next, pick_node.next.prev = pick_node.next, pick_node.prev
        self._head.next, pick_node.next = pick_node, self._head.next 
        pick_node.prev, pick_node.next.prev = self._head, pick_node

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
