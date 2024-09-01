import React, { useState } from 'react';
import AlgorithmList from './componenets/AlgorithmList';
import TypingTest from './componenets/TypingTest';


const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const sections = [
    {
      title: 'Algorithms',
      items: [
        {
          name: 'Breadth-First Search (BFS)',
          code: 'def bfs(graph, start):\n queue = [start]\n visited = []\n while queue:\n  node = queue.pop(0)\n  if node not in visited:\n   visited.append(node)\n   queue.extend(graph[node])\n return visited',
        },
        {
          name: 'Depth-First Search (DFS)',
          code: 'def dfs(graph, start, visited=None):\n if visited is None:\n  visited = set()\n visited.add(start)\n for next in graph[start] - visited:\n  dfs(graph, next, visited)\n return visited',
        },
      ],
    },
    {
      title: 'Data Structures',
      items: [
        {
          name: 'Binary Search Tree (BST)',
          code: 'class Node:\n def __init__(self, key):\n  self.left = None\n  self.right = None\n  self.val = key\n\ndef insert(root, key):\n if root is None:\n  return Node(key)\n else:\n  if root.val < key:\n   root.right = insert(root.right, key)\n  else:\n   root.left = insert(root.left, key)\n return root',
        },
        {
          name: 'Linked List',
          code: 'class Node:\n def __init__(self, data):\n  self.data = data\n  self.next = None\n\nclass LinkedList:\n def __init__(self):\n  self.head = None\n def append(self, data):\n  new_node = Node(data)\n  if not self.head:\n   self.head = new_node\n   return\n  last_node = self.head\n  while last_node.next:\n   last_node = last_node.next\n  last_node.next = new_node',
        },
      ],
    },
    // Add more sections for Sorting Techniques, Dynamic Programming, OOP, etc.
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Typing Speed Test for Programmers</h1>
      {!selectedTopic ? (
        <AlgorithmList 
          sections={sections} 
          onSelect={(topic) => setSelectedTopic(topic)} 
        />
      ) : (
        <TypingTest 
          topic={selectedTopic} 
          onBack={() => setSelectedTopic(null)} 
        />
      )}
    </div>
  );
};

export default App;
