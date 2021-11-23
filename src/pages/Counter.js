/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import MenuHeader from '../components/layout/MenuHeader';
import {
  decreaseCount,
  fetchArticleDetails,
  increaseCount,
  resetCounter,
} from '../actions';

function Counter(props) {
  const {
    counter,
    dispatchIncCount,
    dispatchDecCount,
    dispatchReset,
    dispatchFetchArticleDetails,
    // articleList,
  } = props;
  const [value, setValue] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatchFetchArticleDetails().then((response) => {
      setList(response);
    });
  }, [dispatchFetchArticleDetails]);

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
      <input type="button" value="+" onClick={() => dispatchIncCount(value)} />
      <input
        type="button"
        className="mx-2"
        value="-"
        onClick={() => dispatchDecCount(value)}
      />
      <input type="button" value="Reset to 0" onClick={() => dispatchReset()} />

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

const mapStateToProps = (state) => ({
  counter: state.counterReducer.count,
  articleList: state.articleReducer.articleList,
});

const mapDispatchToProps = (disapatch) => ({
  dispatchIncCount: (value) => disapatch(increaseCount(value)),
  dispatchDecCount: (value) => disapatch(decreaseCount(value)),
  dispatchReset: () => disapatch(resetCounter()),
  dispatchFetchArticleDetails: () => disapatch(fetchArticleDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
