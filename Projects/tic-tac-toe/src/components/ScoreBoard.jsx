import Player from './Player.jsx';

export default function ScoreBoard({ activePlayer }) {
  return (
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
  );
}
