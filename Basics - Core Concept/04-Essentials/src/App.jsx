import { useState } from 'react';
import UserInput from './components/UserInput';
import Header from './components/layouts/Header';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    apr: 8,
    duration: 6,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results dataInput={userInput} />
    </>
  );
}

export default App;
