import React from 'react';
import { Row } from 'reactstrap';
import ColumnChart from '../components/common/ColumnChart';
import MenuHeader from '../components/layout/MenuHeader';

function Breadcrumb() {
  return (
    <>
      <MenuHeader title="Column Chart" />
      <Row className="bg-white pt-4">
        <ColumnChart />
      </Row>
    </>
  );
}

export default Breadcrumb;
