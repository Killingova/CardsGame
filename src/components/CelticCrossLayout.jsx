// src/components/CelticCrossLayout.jsx
import React from 'react';
import CardDisplay from './CardDisplay.jsx';

const CelticCrossLayout = ({ positions, onPositionClick, onCardClick }) => {
  return (
    <div className="celtic-cross-layout">
      {positions.map((position, index) => (
        <div
          key={index}
          className={`position position-${index + 1}`}
          onClick={() => onPositionClick(index)}
        >
          {position.card ? (
            <CardDisplay card={position.card} onClick={() => onCardClick(position.card)} />
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CelticCrossLayout;
