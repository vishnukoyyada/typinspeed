// src/components/sections/DataStructures.js
import React from 'react';
import TypingTest from '../TypingTest';

const DataStructures = ({ onSelect }) => {
    return (
        <div>
            <h2>Data Structures</h2>
            <ul>
                <li onClick={() => onSelect('Binary Search Tree (BST)')}>Binary Search Tree (BST)</li>
                <li onClick={() => onSelect('Linked List')}>Linked List</li>
            </ul>
        </div>
    );
};

export default DataStructures;
