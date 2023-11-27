import { useState } from 'react';

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    apr: 8,
    duration: 6,
  });

  function handleChange(inputIdentifier, newValue) {
    console.log({ inputIdentifier, newValue });
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <section id='user-input'>
        <div className='input-group'>
          <div>
            <label htmlFor='initialInvestment'>Initial investment</label>
            <br />
            <input
              type='number'
              name='initialInvestment'
              value={userInput.initialInvestment}
              onChange={(event) => {
                handleChange('initialInvestment', event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor='annualInvestment'>Annual investment</label>
            <br />
            <input
              type='number'
              name='annualInvestment'
              value={userInput.annualInvestment}
              onChange={(event) => {
                handleChange('annualInvestment', event.target.value);
              }}
            />
          </div>
        </div>
        <div className='input-group'>
          <div>
            <label htmlFor='apr'>Expected return</label>
            <br />
            <input
              type='number'
              name='apr'
              value={userInput.apr}
              onChange={(event) => {
                handleChange('apr', event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor='duration'>Duration</label>
            <br />
            <input
              type='number'
              name='duration'
              value={userInput.duration}
              onChange={(event) => {
                handleChange('duration', event.target.value);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInput;
