// src/components/utils/sectionData.js
export const sections = [
    {
        title: 'Algorithms',
        items: [
            {
                name: 'Breadth-First Search (BFS)',
                code: `def bfs(graph, start):\n queue = [start]\n visited = []\n while queue:\n  node = queue.pop(0)\n  if node not in visited:\n   visited.append(node)\n   queue.extend(graph[node])\n return visited`,
            },
            {
                name: 'Depth-First Search (DFS)',
                code: `def dfs(graph, start, visited=None):\n if visited is None:\n  visited = set()\n visited.add(start)\n for next in graph[start] - visited:\n  dfs(graph, next, visited)\n return visited`,
            },
        ],
    },
    {
        title: 'Data Structures',
        items: [
            {
                name: 'Binary Search Tree (BST)',
                code: `class Node:\n def __init__(self, key):\n  self.left = None\n  self.right = None\n  self.val = key\n\ndef insert(root, key):\n if root is None:\n  return Node(key)\n else:\n  if root.val < key:\n   root.right = insert(root.right, key)\n  else:\n   root.left = insert(root.left, key)\n return root`,
            },
            {
                name: 'Linked List',
                code: `class Node:\n def __init__(self, data):\n  self.data = data\n  self.next = None\n\nclass LinkedList:\n def __init__(self):\n  self.head = None\n def append(self, data):\n  new_node = Node(data)\n  if not self.head:\n   self.head = new_node\n   return\n  last_node = self.head\n  while last_node.next:\n   last_node = last_node.next\n  last_node.next = new_node`,
            },
        ],
    },
    {
        title: 'Sorting Techniques',
        items: [
            {
                name: 'Quick Sort',
                code: `def partition(arr, low, high):\n i = (low-1)\n pivot = arr[high]\n for j in range(low, high):\n  if arr[j] <= pivot:\n   i = i+1\n   arr[i], arr[j] = arr[j], arr[i]\n arr[i+1], arr[high] = arr[high], arr[i+1]\n return (i+1)\n\ndef quickSort(arr, low, high):\n if low < high:\n  pi = partition(arr, low, high)\n  quickSort(arr, low, pi-1)\n  quickSort(arr, pi+1, high)`,
            },
            {
                name: 'Merge Sort',
                code: `def mergeSort(arr):\n if len(arr) > 1:\n  mid = len(arr)//2\n  L = arr[:mid]\n  R = arr[mid:]\n  mergeSort(L)\n  mergeSort(R)\n  i = j = k = 0\n  while i < len(L) and j < len(R):\n   if L[i] < R[j]:\n    arr[k] = L[i]\n    i += 1\n   else:\n    arr[k] = R[j]\n    j += 1\n   k += 1\n  while i < len(L):\n   arr[k] = L[i]\n   i += 1\n   k += 1\n  while j < len(R):\n   arr[k] = R[j]\n   j += 1\n   k += 1`,
            },
        ],
    },
    {
        title: 'Dynamic Programming',
        items: [
            {
                name: 'Fibonacci Sequence',
                code: `def fibonacci(n, memo={}):\n if n in memo:\n  return memo[n]\n if n <= 2:\n  return 1\n memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n return memo[n]`,
            },
            {
                name: 'Knapsack Problem',
                code: `def knapSack(W, wt, val, n):\n if n == 0 or W == 0:\n  return 0\n if (wt[n-1] > W):\n  return knapSack(W, wt, val, n-1)\n else:\n  return max(val[n-1] + knapSack(W-wt[n-1], wt, val, n-1), knapSack(W, wt, val, n-1))`,
            },
        ],
    },
    {
        title: 'Object-Oriented Programming (OOP)',
        items: [
            {
                name: 'Class and Object',
                code: `class Dog:\n def __init__(self, name, age):\n  self.name = name\n  self.age = age\n\ndef main():\n dog1 = Dog('Buddy', 3)\n dog2 = Dog('Max', 2)\n print(f"{dog1.name} is {dog1.age} years old")\n print(f"{dog2.name} is {dog2.age} years old")\n\nif __name__ == "__main__":\n main()`,
            },
            {
                name: 'Inheritance',
                code: `class Animal:\n def __init__(self, name):\n  self.name = name\n def speak(self):\n  raise NotImplementedError("Subclass must implement abstract method")\n\nclass Dog(Animal):\n def speak(self):\n  return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n def speak(self):\n  return f"{self.name} says Meow!"\n\ndog = Dog("Buddy")\ncat = Cat("Whiskers")\nprint(dog.speak())\nprint(cat.speak())`,
            },
        ],
    },
];
