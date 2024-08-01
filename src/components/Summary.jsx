// src/components/Summary.jsx
import React from 'react';

const Summary = ({ positions, positionsInfo }) => {
  return (
    <div className="summary mt-8">
      <h2 className="text-3xl font-bold">Zusammenfassung der Legung</h2>
      {positions.map((position, index) => (
        <div key={index} className="summary-item mt-4">
          <h3 className="text-xl font-semibold">{positionsInfo[index]}</h3>
          {position.card ? (
            <div>
              <p><strong>Karte:</strong> {position.card.name}</p>
              <p><strong>Deutung:</strong> {position.card.meaning}</p>
            </div>
          ) : (
            <p>Keine Karte gezogen</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Summary;
