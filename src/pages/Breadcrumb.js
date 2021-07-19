import React from 'react';
import { Row } from 'reactstrap';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MenuHeader from '../components/layout/MenuHeader';

function Breadcrumb() {
  return (
    <>
      <MenuHeader title="Breadcrumbs" />
      <Row className="bg-white pt-4">
        <Breadcrumbs />
      </Row>
    </>
  );
}

export default Breadcrumb;
