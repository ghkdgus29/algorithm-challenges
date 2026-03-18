class Trie:

    def __init__(self):
        self._trie = {}
        

    def insert(self, word: str) -> None:
        node = self._trie
        for ch in word:
            node = node.setdefault(ch, {})
        node["__end__"] = word
    

    def search(self, word: str) -> bool:
        node = self._trie
        for ch in word: 
            if ch not in node:
                return False
            node = node[ch]
        return "__end__" in node
        

    def startsWith(self, prefix: str) -> bool:
        node = self._trie
        for ch in prefix: 
            if ch not in node:
                return False
            node = node[ch]
        return True
    

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
