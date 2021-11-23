import React from 'react';
import { Row } from 'reactstrap';
import ReactCSVReader from '../components/common/ReactCSVReader';
import MenuHeader from '../components/layout/MenuHeader';

function ReactCSVReaderDemo() {
  return (
    <>
      <MenuHeader title="React CSV Reader" />
      <Row className="bg-white pt-4">
        <ReactCSVReader />
      </Row>
    </>
  );
}

export default ReactCSVReaderDemo;
