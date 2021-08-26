import React from 'react';
import { Row } from 'reactstrap';
import ExcelRead from '../components/common/ReactExcelRenderer';
import MenuHeader from '../components/layout/MenuHeader';

function ExcelReadDemo() {
  return (
    <>
      <MenuHeader title="Excel Read" />
      <Row className="bg-white pt-4">
        <ExcelRead />
      </Row>
    </>
  );
}

export default ExcelReadDemo;
