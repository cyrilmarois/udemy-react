import ScoreBoard from './components/ScoreBoard.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ScoreBoard />
      </div>
      <GameBoard />
    </main>
  );
}

export default App;
