import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = [...initialGameBoard.map((cell) => [...cell])];

  for (const turn of gameTurns) {
    const { grid, player } = turn;
    const [row, col] = grid;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstPositionSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondPositionSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdPositionSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstPositionSymbol &&
      firstPositionSymbol === secondPositionSymbol &&
      firstPositionSymbol === thirdPositionSymbol
    ) {
      winner = firstPositionSymbol;
    }
  }

  const gameDraw = gameTurns.length === 9 && !winner;

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

  function handleResetGame() {
    // reset board and logs
    setGameTurns([]);
  }

  return (
    <main>
      <div id='game-container'>
        <ScoreBoard
          activePlayer={activePlayer}
          winner={winner}
          gameDraw={gameDraw}
          resetGame={handleResetGame}
        />
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log logs={gameTurns} />
    </main>
  );
}

export default App;
