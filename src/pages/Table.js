import React from 'react';
import { Row } from 'reactstrap';
import MenuHeader from '../components/layout/MenuHeader';
import Table from '../components/common/Table';

function CustomTable() {
  const data = React.useMemo(
    () => [
      { id: 1, name: 'Tina' },
      { id: 72, name: 'Mina' },
      { id: 671, name: 'Tina' },
      { id: 432, name: 'Mina' },
      { id: 11, name: 'Tina' },
      { id: 21, name: 'Mina' },
      { id: 12, name: 'Tina' },
      { id: 23, name: 'Mina' },
      { id: 14, name: 'Tina' },
      { id: 25, name: 'Mina' },
      { id: 156, name: 'Tina' },
      { id: 256, name: 'Mina' },
      { id: 1565, name: 'Tina' },
      { id: 23, name: 'Mina' },
      { id: 36, name: 'Tina' },
      { id: 20, name: 'Mina' },
      { id: 10, name: 'Tina' },
      { id: 27, name: 'Mina' },
      { id: 16, name: 'Tina' },
      { id: 98, name: 'Mina' },
      { id: 89, name: 'Tina' },
      { id: 67, name: 'Mina' },
      { id: 256, name: 'Mina' },
      { id: 1565, name: 'Tina' },
      { id: 23, name: 'Mina' },
      { id: 36, name: 'Tina' },
      { id: 20, name: 'Mina' },
      { id: 10, name: 'Tina' },
    ],
    [],
  );
  return (
    <>
      <MenuHeader title="Table" />
      <Row className="bg-white pt-4">
        <Table
          columns={[
            { Header: 'Id', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
          ]}
          data={data}
        />
      </Row>
    </>
  );
}

export default CustomTable;
