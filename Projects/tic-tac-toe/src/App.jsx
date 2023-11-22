import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((previousPlayer) => {
      return previousPlayer === 'X' ? 'O' : 'X';
    });
    setGameTurns((prevTurn) => {
      console.table({ prevTurn });
      let currentPlayer = 'X';
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currentPlayer = 'O';
      }

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
