import React from 'react';
import { Row } from 'reactstrap';
import Map from '../components/common/Map';
import MenuHeader from '../components/layout/MenuHeader';

function Breadcrumb() {
  return (
    <>
      <MenuHeader title="Map" />
      <Row className="bg-white pt-4">
        <Map />
      </Row>
    </>
  );
}

export default Breadcrumb;
