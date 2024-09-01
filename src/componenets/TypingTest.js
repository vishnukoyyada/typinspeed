// src/components/TypingTest.js
import React, { useState } from 'react';

const TypingTest = ({ code }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <pre>
                <code>{code}</code>
            </pre>
            <textarea
                value={inputValue}
                onChange={handleChange}
                placeholder="Start typing here..."
                rows={10}
                style={{ width: '100%', marginTop: '20px' }}
            />
            <div style={{ marginTop: '20px' }}>
                <h3>Typing Accuracy:</h3>
                {/* You can add logic here to calculate typing accuracy */}
            </div>
        </div>
    );
};

export default TypingTest;
