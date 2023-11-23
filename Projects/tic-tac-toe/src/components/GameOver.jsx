export default function GameOver({ winner, resetGame }) {
  function handleResetGame() {
    resetGame();
  }

  return (
    <div id='game-over'>
      <h2>Game Over !</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>{winner} It&apos;s a draw</p>}
      <p>
        <button onClick={handleResetGame}>Rematch ?</button>
      </p>
    </div>
  );
}
