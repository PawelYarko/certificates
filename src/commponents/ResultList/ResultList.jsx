import React from 'react';
import s from './ResultList.module.css';

const ResultList = ({ currentListElem }) => {
  return (
    <>
      {currentListElem && (
        <ul className={s.list}>
          <li>
            <span className={s.label}>Common Name:</span>{' '}
            {currentListElem.commonName}
          </li>
          <li>
            <span className={s.label}>Issuer CN:</span>{' '}
            {currentListElem.issuerCN}
          </li>
          <li>
            <span className={s.label}>validFrom:</span>{' '}
            {currentListElem.validFrom.slice(0, 10)}
          </li>
          <li>
            <span className={s.label}>validTill:</span>{' '}
            {currentListElem.validTill.slice(0, 10)}
          </li>
        </ul>
      )}
    </>
  );
};

export default ResultList;
