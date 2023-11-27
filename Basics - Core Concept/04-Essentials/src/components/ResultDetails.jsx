import { formatter } from '../util/investment.js';

const ResultDetails = ({ initialInvestment, data }) => {
  const totalInterestValue =
    data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;

  const totalAmountInvested =
    data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;

  return (
    <>
      <td>{data.year}</td>
      <td>{formatter.format(data.valueEndOfYear)}</td>
      <td>{formatter.format(data.interest)}</td>
      <td>{formatter.format(totalInterestValue)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </>
  );
};

export default ResultDetails;
