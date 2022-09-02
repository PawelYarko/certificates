import React from 'react';
import s from './ResultList.module.css';

const ResultList = ({ currentListElem }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>Common Name: {currentListElem.commonName}</li>
        <li>Issuer CN: {currentListElem.issuerCN}</li>
        <li>validFrom: {currentListElem.validFrom}</li>
        <li>validTill: {currentListElem.validTill}</li>
      </ul>
    </>
  );
};

export default ResultList;
