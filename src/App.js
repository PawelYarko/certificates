import React, { useState } from 'react';
import ResultList from './ResultList/ResultList';
import NamesList from './NamesList/NamesList';
import fileParser from './helpers/fileParser';
// import useLocalStorage from './useLocalStorage';
import s from './App.module.css';

export default function App() {
  const [drag, setDrag] = useState(true);
  // const [cerValue, setCerValue] = useLocalStorage('cerValue', []);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [listFiles, setListFiles] = useState([]);

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

      listFiles.some((i) => i.idName === result.idName) ||
        setListFiles((listFiles) => [...listFiles, result]);

      setData(result, files[0].name);
    };
    setDrag(false);
  };

  return (
    <div>
      <div className={s.container}>
        <ul className={s.list}>
          {/* {names && names.map((name) => <NamesList name={name} />)} */}
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
            <ResultList data={data} />
          </div>
        )}
      </div>

      <button>Додати</button>
    </div>
  );
}
