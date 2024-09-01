import React, { useState } from 'react';

const TypingTest = ({ topic, onBack }) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleChange = (e) => {
    if (!startTime) {
      setStartTime(new Date());
    }

    setUserInput(e.target.value);

    if (e.target.value === topic.code) {
      setEndTime(new Date());
    }
  };

  const calculateWPM = () => {
    if (!startTime || !endTime) return 0;

    const timeDiff = (endTime - startTime) / 1000; // Time difference in seconds
    const wordsTyped = userInput.split(' ').length;

    return ((wordsTyped / timeDiff) * 60).toFixed(2); // Words per minute
  };

  const getHighlightedText = () => {
    let commonString = '';
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === topic.code[i]) {
        commonString += userInput[i];
      } else {
        break;
      }
    }
    return (
      <>
        <span style={{ color: 'green' }}>{commonString}</span>
        <span style={{ color: 'black' }}>
          {topic.code.slice(commonString.length)}
        </span>
      </>
    );
  };

  return (
    <div>
      <h2>{topic.name}</h2>
      <pre style={{ background: '#f4f4f4', padding: '10px' }}>
        {getHighlightedText()}
      </pre>
      <textarea
        value={userInput}
        onChange={handleChange}
        rows="10"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      {endTime && (
        <div>
          <h3>Your typing speed: {calculateWPM()} WPM</h3>
          <button onClick={onBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;
