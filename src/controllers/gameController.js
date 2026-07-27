const Game = require('../models/Game');
const axios = require('axios');

exports.createGame = async (req, res) => {
  try {
    const newGame = new Game({ board: Array(9).fill(null), isXNext: true });
    const savedGame = await newGame.save();
    res.json(savedGame);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.playMove = async (req, res) => {
  try {
    const { gameId, index } = req.body;
    const game = await Game.findById(gameId);

    if (!game || game.board[index] !== null) {
      return res.status(400).json({ message: 'Invalid move' });
    }

    game.board[index] = game.isXNext ? 'X' : 'O';
    game.isXNext = !game.isXNext;

    await game.save();

    // Check for winner and play AI if needed
    const result = checkWinner(game.board);
    if (result) {
      return res.json({ result });
    }

    // AI move can be added here if 'Play against AI' mode is selected

    res.json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getResult = async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findById(gameId);
    const result = game ? checkWinner(game.board) : 'Game not found';
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

function checkWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return `Winner: ${board[a]}`;
    }
  }
  if (!board.includes(null)) {
    return 'Draw';
  }
  return null;
}