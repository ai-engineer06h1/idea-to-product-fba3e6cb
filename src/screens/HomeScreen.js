```jsx
import React from 'react';

const HomeScreen = ({ onStartGame }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to XO Game</h1>
      <button 
        onClick={onStartGame} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Game
      </button>
    </div>
  );
};

export default HomeScreen;
```