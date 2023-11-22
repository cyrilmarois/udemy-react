import Player from './Player.jsx';

export default function ScoreBoard() {
  return (
    <ol id='players'>
      <Player initialName='Player 1' symbol='X' />
      <Player initialName='Player 2' symbol='O' />
    </ol>
  );
}
