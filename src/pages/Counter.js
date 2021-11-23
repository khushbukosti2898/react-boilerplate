/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import MenuHeader from '../components/layout/MenuHeader';
import {
  decreaseCount,
  fetchArticleDetails,
  increaseCount,
  resetCounter,
} from '../actions';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.count);
  const [value, setValue] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(fetchArticleDetails()).then((response) => {
      setList(response);
    });
  }, [dispatch]);

  return (
    <>
      <MenuHeader title="Redux Counter Demo" />
      <Row className="mt-3">
        <Col>
          Set counter multiple:
          <input
            className="mx-1"
            type="number"
            name="value"
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>{`Counter : ${counter}`}</Col>
      </Row>
      <br />
      <input
        type="button"
        value="+"
        onClick={() => dispatch(increaseCount(value))}
      />
      <input
        type="button"
        className="mx-2"
        value="-"
        onClick={() => dispatch(decreaseCount(value))}
      />
      <input
        type="button"
        value="Reset to 0"
        onClick={() => dispatch(resetCounter())}
      />

      <div className="mt-4">
        <h5>List of users(using dispatch API call)</h5>
        <ul>
          {list.length &&
            list.map((li) => {
              return <li key={li.id}>{`${li.name} - ${li.email}`}</li>;
            })}
        </ul>
      </div>
    </>
  );
}

export default Counter;
