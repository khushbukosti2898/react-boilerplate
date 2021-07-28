/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// import ReactHelmet from '../components/common/ReactHelmet';

const App = ({ dataList }) => {
  if (!dataList || dataList.length === 0) {
    return <div>No Contacts</div>;
  }
  return dataList.map((data) => (
    <li data-testid="list-name" key={data.id}>
      {data.task}
    </li>
  ));
};

App.defaultProps = {
  dataList: [],
};

App.propTypes = {
  dataList: PropTypes.array,
};

export default App;
