import React from 'react';
import ReactHelmet from '../components/common/ReactHelmet';
import { getItemFromStorage } from '../utils/helper';

function App() {
  return (
    <>
      <ReactHelmet title="Home" />
      <h2>
        Welcome&nbsp;
        {getItemFromStorage('user').name}
      </h2>
      <p>
        email: &nbsp;
        {getItemFromStorage('user').email}
      </p>
    </>
  );
}

export default App;
