```jsx
import React, { useState } from 'react';

const GameBoardScreen = ({ onGameEnd }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = board.slice();
    if (newBoard[index]) return;  // Ignore if already filled
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        onGameEnd(`Winner: ${board[a]}`);
        return;
      }
    }
    if (!board.includes(null)) {
      onGameEnd('Draw');
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Game Board</h2>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button 
            key={index} 
            onClick={() => handleClick(index)} 
            className="w-24 h-24 bg-gray-200 flex items-center justify-center text-2xl">
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoardScreen;
```