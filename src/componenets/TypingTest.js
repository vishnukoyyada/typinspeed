import React, { useState, useEffect } from 'react';

const TypingTest = ({ code }) => {
    const [userInput, setUserInput] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isCompleted) return;

            if (cursorPosition === 0 && startTime === null) {
                setStartTime(Date.now());
            }

            const currentChar = code[cursorPosition];
            const nextCursorPosition = cursorPosition + 1;

            if (e.key === 'Backspace') {
                if (userInput.length > 0) {
                    setUserInput((prev) => prev.slice(0, -1));
                    setCursorPosition((prev) => Math.max(0, prev - 1));
                }
                e.preventDefault();
            } else if (e.key === 'Enter') {
                setUserInput((prev) => prev + '\n');
                setCursorPosition(nextCursorPosition);
                e.preventDefault();
            } else if (e.key === currentChar) {
                setUserInput((prev) => prev + e.key);
                setCursorPosition(nextCursorPosition);
            } else if (e.key.length === 1 && e.key !== 'Enter') {
                // Register incorrect key press, but do not move the cursor.
                setUserInput((prev) => prev + e.key);
            }

            // Check if the typing is completed
            if (userInput.length === code.length) {
                setIsCompleted(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [cursorPosition, code, isCompleted, startTime, userInput]);

    const calculateWPM = () => {
        if (!startTime) return 0;
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000 / 60; // time in minutes
        const wordsTyped = userInput.split(/\s+/).length;
        return Math.round(wordsTyped / timeTaken);
    };

    const renderCode = () => {
        return code.split('').map((char, index) => {
            const isCorrect = userInput[index] === char;
            const isWrong = userInput[index] && userInput[index] !== char;
            const isCursor = index === cursorPosition;

            return (
                <span
                    key={index}
                    style={{
                        backgroundColor: isCursor
                            ? 'lightblue'
                            : isCorrect
                            ? 'lightgreen'
                            : isWrong
                            ? 'lightcoral'
                            : 'transparent',
                        textDecoration: isCursor ? 'underline' : 'none',
                    }}
                >
                    {char}
                </span>
            );
        });
    };

    return (
        <div>
            <pre style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
                <code>{renderCode()}</code>
            </pre>
            <textarea
                value={userInput}
                placeholder="Start typing here..."
                rows={10}
                style={{ width: '100%', marginTop: '20px', opacity: 0 }}
                readOnly
            />
            {isCompleted && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Typing Completed!</h3>
                    <h4>Your Typing Speed: {calculateWPM()} WPM</h4>
                </div>
            )}
        </div>
    );
};

export default TypingTest;
