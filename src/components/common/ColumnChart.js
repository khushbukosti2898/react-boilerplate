/* eslint-disable react/prop-types */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data, text }) => {
  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text,
    },
    series: [
      {
        data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
