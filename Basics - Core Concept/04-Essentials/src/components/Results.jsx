import { useState } from 'react';
import ResultDetails from './ResultDetails';

const Results = ({ dataInput }) => {
  console.log({ dataInput });
  const [investments, setInvestments] = useState([]);
  return (
    <>
      <div id='result'>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Year</th>
              <th>initial</th>
              <th>current</th>
              <th>APR</th>
              <th>duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {investments.map((invest) => (
                <ResultDetails
                  id={invest.id}
                  year={invest.year}
                  initialInvest={invest.initialInvest}
                  apr={invest.apr}
                  duration={invest.duration}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;
