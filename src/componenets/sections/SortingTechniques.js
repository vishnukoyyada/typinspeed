// src/components/sections/SortingTechniques.js
import React from 'react';
import TypingTest from '../TypingTest';

const SortingTechniques = ({ onSelect }) => {
    return (
        <div>
            <h2>Sorting Techniques</h2>
            <ul>
                <li onClick={() => onSelect('Quick Sort')}>Quick Sort</li>
                <li onClick={() => onSelect('Merge Sort')}>Merge Sort</li>
            </ul>
        </div>
    );
};

export default SortingTechniques;
