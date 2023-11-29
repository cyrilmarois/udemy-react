const UserInput = ({ onChange, userInput }) => {
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
                onChange('initialInvestment', event.target.value);
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
                onChange('annualInvestment', event.target.value);
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
                onChange('apr', event.target.value);
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
                onChange('duration', event.target.value);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInput;
