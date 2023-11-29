import { useRef, useState } from 'react';

export default function Player() {
  let playerLevel = useRef();
  const [inputPlayerName, setInputPlayerName] = useState('');
  const [inputPlayerLevel, setInputPlayerLevel] = useState(null);
  const [isButtonToggled, setIsButtonToggled] = useState(false);

  function handleChangePlayerName(e) {
    setIsButtonToggled(false);
    setInputPlayerName(e.target.value);
  }

  function handlePlayerNameClick() {
    setIsButtonToggled(true);
  }

  function handlePlayerLevelClick() {
    setInputPlayerLevel(playerLevel.current.value);
  }

  return (
    <section id='player'>
      <h2>Welcome {isButtonToggled ? inputPlayerName : 'unknown entity'}</h2>
      <h2>Your level is {inputPlayerLevel ?? 'to be determined'}</h2>
      <p>
        <input
          type='text'
          value={inputPlayerName}
          onChange={handleChangePlayerName}
        />
        <button onClick={handlePlayerNameClick}>Set Name</button>
      </p>
      <p>
        <input ref={playerLevel} type='number' />
        <button onClick={handlePlayerLevelClick}>Set Level</button>
      </p>
    </section>
  );
}
