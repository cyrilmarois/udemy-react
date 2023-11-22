import { useState } from 'react';

import ScoreBoard from './components/ScoreBoard.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => {
      return currentActivePlayer === 'X' ? 'O' : 'X';
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ScoreBoard activePlayer={activePlayer} />
      </div>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
    </main>
  );
}

export default App;
