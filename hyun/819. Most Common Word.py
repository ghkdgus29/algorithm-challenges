class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        # lowercase change
        # most frequent word that is not banned.

        p = re.sub(r"[^\w ]", " ", paragraph.lower())
        p = p.split()
        counter = collections.Counter(p)

        for word, _ in counter.most_common():
            if word not in banned:
                return word
