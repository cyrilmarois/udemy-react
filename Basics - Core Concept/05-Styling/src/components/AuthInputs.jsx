import { useState } from 'react';
import { styled } from 'styled-components';
import ButtonContainer from './ButtonContainer';
import Input from './Input';

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id='auth-inputs'>
      <ControlDiv>
        <Input
          label='Email'
          invalid={emailNotValid}
          type='email'
          // className={emailNotValid ? 'invalid' : undefined}
          $invalid={emailNotValid}
          style={{ backgroundColor: emailNotValid ? '#f87171' : '' }}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          label='Password'
          invalid={passwordNotValid}
          type='password'
          // className={passwordNotValid ? 'invalid' : undefined}
          className={`jarvis ${passwordNotValid ? 'invalid' : undefined}`}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlDiv>
      <div className='actions'>
        <button type='button' className='text-button'>
          Create a new account
        </button>
        <ButtonContainer className='button' onClick={handleLogin}>
          Sign In
        </ButtonContainer>
      </div>
    </div>
  );
}
