class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        # make graph
        graph = collections.defaultdict(list)
        for ticket in tickets:
            graph[ticket[0]].append(ticket[1])

        for v in graph.values():
            v.sort()

        route = []

        def go(cur):
            while graph[cur]:
                go(graph[cur].pop(0))
            route.append(cur)

        go("JFK")
        return route[::-1]
