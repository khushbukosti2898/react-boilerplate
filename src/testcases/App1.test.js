import axios from 'axios';
import { getUserData } from '../pages/App1';
jest.mock('axios');

describe('mock test', () => {
  test('match normal end point', async () => {
    const mockedresponse = {
      data: {
        completed: false,
        id: 1,
        title: "title",
        userId: 1
      }
    };
    axios.get.mockResolvedValue(mockedresponse);
    await getUserData();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    expect(axios.get).toHaveBeenCalledTimes(1);
  })
});