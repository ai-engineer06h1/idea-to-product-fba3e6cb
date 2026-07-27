```jsx
import React from 'react';

const GameSelectionScreen = ({ onSelectMode }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Select Game Mode</h1>
      <button 
        onClick={() => onSelectMode('AI')} 
        className="bg-green-500 text-white px-4 py-2 m-2 rounded">
        Play against AI
      </button>
      <button 
        onClick={() => onSelectMode('TwoPlayer')} 
        className="bg-yellow-500 text-white px-4 py-2 m-2 rounded">
        Two Player
      </button>
    </div>
  );
};

export default GameSelectionScreen;
```