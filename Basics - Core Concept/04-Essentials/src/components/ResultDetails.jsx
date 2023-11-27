const ResultDetails = ({ id, duration, apr, year, initialInvest }) => {
  return (
    <>
      <td>{id}</td>
      <td>{year}</td>
      <td>{initialInvest}</td>
      <td>{duration}</td>
      <td>{apr}</td>
    </>
  );
};

export default ResultDetails;
