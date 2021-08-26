/* eslint-disable max-len */
import React, { useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import { FormGroup, Label } from 'reactstrap';
import Table from './Table';

const ExcelRead = () => {
  const fileInput = React.createRef();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const renderFile = (fileObj) => {
    // just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        const columns = [
          {
            Header: 'iRely',
            name: 'iRely',
            accessor: 'iRely',
          },
          { Header: 'mmof', name: 'mmof', accessor: 'mmof' },
          { Header: 'pds', name: 'pds', accessor: 'pds' },
        ];
        const rowss = resp.rows.map((ro) => ({
          iRely: ro[1],
          mmof: ro[2],
          pds: ro[3],
        }));
        setDataLoaded(true);
        setCols(columns);
        rowss.splice(0, 2);
        setRows(rowss);
      }
    });
  };

  const fileHandler = (event) => {
    if (event.target.files.length) {
      const fileObj = event.target.files[0];
      const fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === 'xlsx') {
        renderFile(fileObj);
      }
    }
  };

  return (
    <div>
      <form>
        <FormGroup row>
          <Label xs={12} sm={12} lg={12} size="lg">
            Upload
          </Label>
          <input
            type="file"
            onChange={fileHandler}
            ref={fileInput}
            className="ml-2"
          />
        </FormGroup>
      </form>

      {dataLoaded && (
        <div>
          <Table
            data={rows}
            columns={cols}
            totalPages={1}
            showPageSize={false}
          />
        </div>
      )}
    </div>
  );
};

export default ExcelRead;
