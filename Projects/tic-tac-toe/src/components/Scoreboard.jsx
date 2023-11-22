import Player from './Player.jsx';

export default function Scoreboard() {
  return (
    <ol id='players'>
      <Player initialName='Player 1' symbol='X' />
      <Player initialName='Player 2' symbol='O' />
    </ol>
  );
}
