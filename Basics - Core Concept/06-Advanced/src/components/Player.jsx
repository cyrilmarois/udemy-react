import { useState } from 'react';

export default function Player() {
  const [inputPlayerName, setInputPlayerName] = useState('');
  const [isButtonToggled, setIsButtonToggled] = useState(false);

  function handleChangePlayerName(e) {
    setIsButtonToggled(false);
    setInputPlayerName(e.target.value);
  }

  function toggleClick() {
    setIsButtonToggled(true);
  }

  return (
    <section id='player'>
      <h2>Welcome {isButtonToggled ? inputPlayerName : 'unknown entity'}</h2>
      <p>
        <input
          type='text'
          value={inputPlayerName}
          onChange={handleChangePlayerName}
        />
        <button onClick={toggleClick}>Set Name</button>
      </p>
    </section>
  );
}
