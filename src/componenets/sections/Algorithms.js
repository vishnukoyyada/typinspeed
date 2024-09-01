// src/components/sections/Algorithms.js
import React from 'react';
import TypingTest from '../TypingTest';

const Algorithms = ({ onSelect }) => {
    return (
        <div>
            <h2>Algorithms</h2>
            <ul>
                <li onClick={() => onSelect('Breadth-First Search (BFS)')}>Breadth-First Search (BFS)</li>
                <li onClick={() => onSelect('Depth-First Search (DFS)')}>Depth-First Search (DFS)</li>
            </ul>
        </div>
    );
};

export default Algorithms;
