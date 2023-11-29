export default function Log({ logs }) {
  return (
    <ol id='log'>
      {logs.map((log, index) => (
        <li key={index}>
          {log.player} plays position : {log.grid[0]}, {log.grid[1]}
        </li>
      ))}
    </ol>
  );
}
