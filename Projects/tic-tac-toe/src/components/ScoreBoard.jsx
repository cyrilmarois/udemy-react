import GameOver from './GameOver.jsx';
import Player from './Player.jsx';

export default function ScoreBoard({
  activePlayer,
  winner,
  gameDraw,
  resetGame,
}) {
  return (
    <>
      <ol id='players' className='highlight-player'>
        <Player
          initialName='Player 1'
          symbol='X'
          isActive={activePlayer === 'X'}
        />
        <Player
          initialName='Player 2'
          symbol='O'
          isActive={activePlayer === 'O'}
        />
      </ol>
      {(winner || gameDraw) && (
        <GameOver resetGame={resetGame} winner={winner} />
      )}
    </>
  );
}
