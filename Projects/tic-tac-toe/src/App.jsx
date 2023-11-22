import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

function derivedActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = derivedActivePlayer(prevTurn);
      const newTurn = [
        { player: currentPlayer, grid: [rowIndex, colIndex] },
        ...prevTurn,
      ];

      return newTurn;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ScoreBoard activePlayer={activePlayer} />
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log logs={gameTurns} />
    </main>
  );
}

export default App;
