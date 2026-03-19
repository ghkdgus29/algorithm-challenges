class WordDictionary:

    def __init__(self):
        self._trie = {}
        

    def addWord(self, word: str) -> None:
        node = self._trie
        for ch in word: 
            node = node.setdefault(ch, {})
        node["__end__"] = word
        

    def search(self, word: str) -> bool:
        node = self._trie
        return self._go(node, word)
    
    def _go(self, fivot_node: dict, word: str) -> bool:
        if fivot_node is None and not word:
            return True

        node = fivot_node
        for i, ch in enumerate(word):
            if ch == ".":
                flag = False
                for nxt in node.values():
                    if isinstance(nxt, str):
                        nxt = {}
                    flag |= self._go(nxt, word[i + 1 :])
                return flag
            if ch not in node:
                return False
            node = node[ch]
        return "__end__" in node



# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
