import React from 'react';
import { Col, Row } from 'reactstrap';
import LineChart from '../components/common/LineChart';
import MenuHeader from '../components/layout/MenuHeader';
import { monthLabels } from '../utils/helper';

function Breadcrumb() {
  return (
    <>
      <MenuHeader title="Bar Chart" />
      <Row>
        <Col md={6}>
          <div className="chart-container">
            <div className="bg-white pt-4 chart ">
              <LineChart
                chartData={{
                  data: [1, 2, 1, 4, 3, 6],
                  chartKey: 'column',
                  labels: monthLabels(),
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Breadcrumb;
