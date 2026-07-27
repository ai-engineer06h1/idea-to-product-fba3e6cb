```jsx
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import GameSelectionScreen from './screens/GameSelectionScreen';
import GameBoardScreen from './screens/GameBoardScreen';
import ResultsScreen from './screens/ResultsScreen';

function App() {
  const [screen, setScreen] = useState('home');
  const [gameResult, setGameResult] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {screen === 'home' && <HomeScreen onStartGame={() => setScreen('selection')} />}
      {screen === 'selection' && <GameSelectionScreen onSelectMode={() => setScreen('game')} />}
      {screen === 'game' && <GameBoardScreen onGameEnd={(result) => { setGameResult(result); setScreen('result'); }} />}
      {screen === 'result' && <ResultsScreen result={gameResult} onPlayAgain={() => setScreen('game')} onHome={() => setScreen('home')} />}
    </div>
  );
}

export default App;
```