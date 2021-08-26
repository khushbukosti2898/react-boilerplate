import moment from 'moment';
import React from 'react';
import CSVReader from 'react-csv-reader';
import { useState } from 'react/cjs/react.development';
import Table from './Table';

const ReactCSVReader = () => {
  const [col, setCol] = useState([]);
  const [row, setRow] = useState([]);
  const handleForce = (data, fileInfo) => {
    console.log(fileInfo);
    const colData = Object.keys(data[0]).map((c) => ({
      accessor: c,
      Header: c,
    }));
    setCol(colData);
    setRow(
      data.map((d) => ({
        ...d,
        datetime: d.datetime && moment(new Date(d.datetime)).format(),
      })),
    );
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  };
  return (
    <div>
      <CSVReader
        cssClass="csv-reader-input mb-4"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      {row.length > 0 && <Table data={row} columns={col} />}
    </div>
  );
};

export default ReactCSVReader;
