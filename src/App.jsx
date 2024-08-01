// src/App.jsx
import React, { useState } from 'react';
import CelticCrossLayout from './components/CelticCrossLayout';
import CardInfo from './components/CardInfo';
import Summary from './components/Summary';
import './index.css';
import tarotkarten from './data/cardData';
import positionsInfo from './data/positionsInfo';

const shuffleDeck = () => {
  const shuffled = [...tarotkarten];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const App = () => {
  const [positions, setPositions] = useState(Array(10).fill({ card: null }));
  const [selectedCard, setSelectedCard] = useState(null);
  const [deck, setDeck] = useState(shuffleDeck());

  const handlePositionClick = (index) => {
    if (deck.length === 0) return;
    
    const newPositions = [...positions];
    if (!newPositions[index].card) {
      newPositions[index] = { card: deck.pop() };
      setPositions(newPositions);
      setDeck([...deck]);
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const resetGame = () => {
    setPositions(Array(10).fill({ card: null }));
    setSelectedCard(null);
    setDeck(shuffleDeck());
  };

  return (
    <div className="app">
      <h1 className="text-center text-5xl font-bold mb-8">Keltisches Kreuz Tarotlegung</h1>
      <CelticCrossLayout 
        positions={positions} 
        onPositionClick={handlePositionClick} 
        onCardClick={handleCardClick}
        positionsInfo={positionsInfo}
      />
      {selectedCard && <CardInfo card={selectedCard} />}
      <Summary positions={positions} positionsInfo={positionsInfo} />
      <button onClick={resetGame} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Neues Spiel
      </button>
    </div>
  );
};

export default App;
