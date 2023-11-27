import ResultDetails from './ResultDetails';
import { calculateInvestmentResults } from '../util/investment.js';

const Results = ({ dataInput }) => {
  const resultsData = calculateInvestmentResults({
    initialInvestment: dataInput.initialInvestment,
    annualInvestment: dataInput.annualInvestment,
    expectedReturn: dataInput.apr,
    duration: dataInput.duration,
  });

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>APR (Year)</th>
          <th>Total value interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => {
          return (
            <tr key={data.year}>
              <ResultDetails
                initialInvestment={initialInvestment}
                data={data}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
