import { cleanup, render, waitFor } from '@testing-library/react';
import { getRoles, logRoles } from '@testing-library/dom'

import App from '../pages/App';
import renderer from 'react-test-renderer';
import ReactHelmet from '../components/common/ReactHelmet';

// afterEach(() => {
//   cleanup();
// });
afterEach(cleanup);

describe('My tests 1', () => {
  test('test1', () => {
    expect(true).toBe(true);
  })
  test('test2', () => {
    expect(false).toBe(false);
  })
});

describe('My tests 2', () => {
  test('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  })
  test('arithmetic', function () {
    expect(4 + 4).toBeGreaterThan(7);
    expect(4 + 4).toBeLessThan(9);
  });

  test('references', function () {
    var arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
    expect(arr).not.toBe([1, 2, 3]); // since === doesn't do deep comparison!
    expect(arr).toContain(1);
  });
});

describe('<App />', () => {

  test('renders "no contacts" when there are no contacts', () => {
    const { getByText } = render(<App />);
    expect(getByText(/no contacts/i)).toBeInTheDocument();
  });

  test('renders when contacts', () => {
    const contacts = [{ id: 1, task: 'Wash dish', completed: false },
    { id: 2, task: 'Wash dish', completed: false },
    { id: 3, task: 'Wash dish', completed: false }];
    const { getAllByTestId } = render(<App dataList={contacts} />);
    const listName = getAllByTestId('list-name');
    expect(listName.length).toEqual(3);
    expect(listName.map((a) => a.textContent)).toEqual(contacts.map((s) => s.task));
  });
});

describe('Snapshot test', () => {
  test('Snapshot match', () => {
    const tree = renderer.create(<App data={
      { id: 2, task: 'Make dinner', completed: true }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});