/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from 'axios';

export const getUserData = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};

// getUserData();

// export default getUserData;
// module.exports = { getUserData };
