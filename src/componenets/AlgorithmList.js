import React from 'react';

const AlgorithmList = ({ sections, onSelect }) => {
  return (
    <div>
      <h2>Select a Programming Topic</h2>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3>{section.title}</h3>
          <div>
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => onSelect(item)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  padding: '10px',
                  margin: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlgorithmList;
