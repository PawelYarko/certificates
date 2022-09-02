import React, { useState, useEffect } from 'react';
import ResultList from './ResultList/ResultList';
import NamesList from './NamesList/NamesList';
import fileParser from './helpers/fileParser';
import useLocalStorage from './useLocalStorage/useLocalStorage';
import Button from '@mui/material/Button';
import s from './App.module.css';

export default function App() {
  const [drag, setDrag] = useState(true);
  const [locStorage, setLocStorage] = useLocalStorage('listValue', []);
  const [btnStatus, setBtnStatus] = useState(false);
  const [currentListElem, setCurrentListElem] = useState(null);
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    if (locStorage) {
      setListValue(locStorage);
    }
  }, [locStorage]);

  const dragStartHandle = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragOverHandle = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandle = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();

    let files = e.dataTransfer.files;
    const reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = () => {
      let result = fileParser(reader.result, files[0].name);
      setLocStorage([...listValue, result]);
    };
    setDrag(false);
  };

  const onNameClick = (e) => {
    const targetNameId = e.currentTarget.dataset.name;
    let currentListElem = listValue.find(
      (value) => value.idName === targetNameId
    );
    setCurrentListElem(currentListElem);
    setDrag(false);
  };

  const btnAddClick = (e) => {
    if (!btnStatus) {
      e.target.textContent = 'Скасувати';
      setBtnStatus(true);
    } else {
      e.target.textContent = 'Додати';
      setBtnStatus(false);
    }
  };

  const btnDeleteClick = (id) => {
    const index = listValue.findIndex((item) => item.idName === id);
    if (index === -1) return;
    listValue.splice(index, 1);
    setLocStorage([...listValue]);
  };

  return (
    <div className={s.main}>
      <div className={s.container}>
        {listValue && (
          <NamesList
            listValue={listValue}
            currentListElem={currentListElem}
            onClick={onNameClick}
            btnDeleteClick={btnDeleteClick}
          />
        )}

        {drag && !btnStatus ? (
          <div className={s.choose}>
            <p>Виберіть сертифікат, щоб переглянути інформацію</p>
          </div>
        ) : (
          <div
            className={
              currentListElem && !btnStatus ? `${s.choose}` : `${s.result}`
            }
            onDragStart={(e) => dragStartHandle(e)}
            onDragLeave={(e) => dragLeaveHandle(e)}
            onDragOver={(e) => dragOverHandle(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            {!btnStatus ? (
              <ResultList currentListElem={currentListElem} />
            ) : (
              <p>Перетягніть файл сертифіката у поле</p>
            )}
          </div>
        )}
      </div>
      <Button
        className={s.button}
        onClick={(e) => btnAddClick(e)}
        variant="outlined"
      >
        Додати
      </Button>
    </div>
  );
}
