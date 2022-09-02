import React from 'react';

const ResultList = ({ currentListElem }) => {
  console.log(currentListElem);
  return (
    <>
      <ul>
        <li>Common Name: {currentListElem.commonName}</li>
        <li>Issuer CN: {currentListElem.issuerCN}</li>
        <li>validFrom: {currentListElem.validFrom}</li>
        <li>validTill: {currentListElem.validTill}</li>
      </ul>
    </>
  );
};

export default ResultList;
