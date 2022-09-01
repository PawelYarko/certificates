import React, { useState, useEffect } from 'react';
import ResultList from './ResultList/ResultList';
import NamesList from './NamesList/NamesList';
import fileParser from './helpers/fileParser';
import useLocalStorage from './useLocalStorage/useLocalStorage';
import s from './App.module.css';

export default function App() {
  const [drag, setDrag] = useState(true);
  const [locStorage, setLocStorage] = useLocalStorage('listValue', []);
  const [btnStatus, setBtnStatus] = useState(false);
  const [currentListElem, setCurrentListElem] = useState([]);
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    setListValue(locStorage);
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

      listValue.find((item) => item.idName === result.idName) ||
        setLocStorage((listValue) => [...listValue, result]);
    };
    setDrag(false);
  };

  const onNameClick = (e) => {
    const targetNameId = e.target.dataset.name;
    const currentName = listValue.find(
      (value) => value.idName === targetNameId
    );
    setCurrentListElem(currentName);
  };

  return (
    <div>
      <div className={s.container}>
        <ul className={s.list}>
          <NamesList listValue={listValue} onClick={onNameClick} />
        </ul>

        {drag ? (
          <div
            className={s.result}
            onDragStart={(e) => dragStartHandle(e)}
            onDragLeave={(e) => dragLeaveHandle(e)}
            onDragOver={(e) => dragOverHandle(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            add file
          </div>
        ) : (
          <div
            className={s.result}
            onDragStart={(e) => dragStartHandle(e)}
            onDragLeave={(e) => dragLeaveHandle(e)}
            onDragOver={(e) => dragOverHandle(e)}
          >
            {currentListElem ? (
              <ResultList currentListElem={currentListElem} />
            ) : (
              <p>Порожньо</p>
            )}
          </div>
        )}
      </div>

      <button onClick={() => setBtnStatus(btnStatus ? false : true)}>
        Додати
      </button>
    </div>
  );
}
