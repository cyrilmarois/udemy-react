import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditMode() {
    // import for react upscale we must not use update
    // according to previous state value as the following
    // setIsEditing(!editing);
    setIsEditing((editing) => !editing);
  }

  function handleChangePlayerName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <>
            <input
              type='text'
              name='player-name'
              value={playerName}
              onChange={handleChangePlayerName}
              required
            />
          </>
        ) : (
          <>
            <span className='player-name'>{playerName}</span>
          </>
        )}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditMode}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
