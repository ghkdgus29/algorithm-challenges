class Solution:
    def simplifyPath(self, path: str) -> str:
        path = path.strip("/")
        clean_paths = re.sub(r"/+", "/", path).split("/")
        stack = []
        for clean_path in clean_paths:
            if clean_path == ".":
                continue 
            elif clean_path == "..":
                if stack: 
                    stack.pop() 
            else:
                stack.append(clean_path)
        
        return '/' + '/'.join(stack) 
