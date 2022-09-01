import React from 'react';
import s from './NamesList.module.css';

const NamesList = ({ listValue, onClick }) => {
  console.log(listValue);
  return (
    <>
      {listValue ? (
        listValue
          .filter((item) => item)
          .map((item) => (
            <li key={item.idName} data-name={item.idName} onClick={onClick}>
              {item.commonName}
            </li>
          ))
      ) : (
        <p>Порожньо</p>
      )}
    </>
  );
};

export default NamesList;
