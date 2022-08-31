import React from 'react';

const ResultList = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul>
        <li>Common Name: {data.commonName}</li>
        <li>Issuer CN: {data.issuerCN}</li>
        <li>validFrom: {data.validFrom}</li>
        <li>validTill: {data.validTill}</li>
      </ul>
    </>
  );
};

export default ResultList;
