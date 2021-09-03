import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function LineChart({ className, chartData }) {
  const { chartKey, labels, data, indexAxis } = chartData;
  const initChart = useCallback(
    (canvasId) => {
      const ctx = document.getElementById(canvasId).getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        options: {
          animations: {
            tension: {
              duration: 50,
              easing: 'easeInOutQuint',
              from: 1,
              to: 0,
              loop: false,
            },
          },
          interaction: {
            mode: 'point',
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
            tooltip: {
              // backgroundColor: '#121212',
              // titleColor: '#121212',
              // bodyColor: '#121212',
            },
          },
          responsive: true,
          scales: {
            x: {
              grid: {
                color() {
                  return '';
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                min: 0,
                max: 100,
              },
              title: {
                display: true,
                text: 'Number of Orders',
              },
            },
          },
          indexAxis,
        },
        data: {
          labels,
          datasets: [
            {
              label: 'Orders',
              data,
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              borderColor: 'rgba(255, 99, 132, 0.8)',
              tension: 0.2,
            },
          ],
        },
      });
      return chart;
    },
    [data, indexAxis, labels],
  );

  useEffect(() => {
    const chart = initChart(`${chartKey}-linechart`);
    return () => {
      chart.destroy();
    };
  }, [chartKey, initChart]);

  return (
    <canvas
      id={`${chartKey}-linechart`}
      className={`line-chart ${className}`}
    />
  );
}

LineChart.defaultProps = {
  className: '',
};

LineChart.propTypes = {
  chartData: PropTypes.shape({
    chartKey: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    indexAxis: PropTypes.string,
    originalData: PropTypes.array,
    timePeriod: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default LineChart;
