// src/components/sections/DynamicProgramming.js
import React from 'react';
import TypingTest from '../TypingTest';

const DynamicProgramming = ({ onSelect }) => {
    return (
        <div>
            <h2>Dynamic Programming</h2>
            <ul>
                <li onClick={() => onSelect('Fibonacci Sequence')}>Fibonacci Sequence</li>
                <li onClick={() => onSelect('Knapsack Problem')}>Knapsack Problem</li>
            </ul>
        </div>
    );
};

export default DynamicProgramming;
