```jsx
import React from 'react';

const ResultsScreen = ({ result, onPlayAgain, onHome }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{result}</h1>
      <button 
        onClick={onPlayAgain} 
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
        Play Again
      </button>
      <button 
        onClick={onHome} 
        className="bg-red-500 text-white px-4 py-2 m-2 rounded">
        Home
      </button>
    </div>
  );
};

export default ResultsScreen;
```