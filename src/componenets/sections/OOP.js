// src/components/sections/OOP.js
import React from 'react';
import TypingTest from '../TypingTest';

const OOP = ({ onSelect }) => {
    return (
        <div>
            <h2>Object-Oriented Programming (OOP)</h2>
            <ul>
                <li onClick={() => onSelect('Class and Object')}>Class and Object</li>
                <li onClick={() => onSelect('Inheritance')}>Inheritance</li>
            </ul>
        </div>
    );
};

export default OOP;
