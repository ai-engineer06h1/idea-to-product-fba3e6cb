const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createGame, getResult, playMove } = require('./controllers/gameController');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.post('/api/game', createGame);
app.post('/api/game/move', playMove);
app.get('/api/game/result/:gameId', getResult);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
