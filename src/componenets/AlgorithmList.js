// src/components/AlgorithmList.js
import React, { useState } from 'react';
import { sections } from './utils/sectionData';
import TypingTest from './TypingTest';

const AlgorithmList = () => {
    const [selectedCode, setSelectedCode] = useState(null);

    const handleSelect = (name) => {
        const foundSection = sections.find((section) =>
            section.items.some((item) => item.name === name)
        );
        const foundItem = foundSection.items.find((item) => item.name === name);
        setSelectedCode(foundItem.code);
    };

    return (
        <div>
            {sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item.name} onClick={() => handleSelect(item.name)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {selectedCode && <TypingTest code={selectedCode} />}
        </div>
    );
};

export default AlgorithmList;
