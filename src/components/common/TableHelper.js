/* eslint-disable no-nested-ternary */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Input } from 'reactstrap';
import Select from 'react-select';

export const getUrlEncodedValue = (value) => {
  let urlEncodeValue = value;
  if (urlEncodeValue.indexOf("'") > -1) {
    urlEncodeValue = urlEncodeValue.replace(/'/g, "''");
  } else if (urlEncodeValue.indexOf('%') > -1) {
    urlEncodeValue = urlEncodeValue.replace(/%/g, '\\%');
  } else if (urlEncodeValue.indexOf('_') > -1) {
    urlEncodeValue = urlEncodeValue.replace(/_/g, '\\_');
  }
  return urlEncodeValue;
};
const renderSortingArrows = (column) => {
  return !column.disableSortBy ? (
    column.isSorted ? (
      column.isSortedDesc ? (
        <>
          <FontAwesomeIcon icon={faLongArrowAltDown} className="sort-arrow" />
          <FontAwesomeIcon
            icon={faLongArrowAltUp}
            className="sort-arrow--active"
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faLongArrowAltUp}
            className="sort-arrow--active"
          />
          <FontAwesomeIcon icon={faLongArrowAltDown} className="sort-arrow" />
        </>
      )
    ) : (
      <>
        <FontAwesomeIcon icon={faLongArrowAltUp} className="sort-arrow" />
        <FontAwesomeIcon icon={faLongArrowAltDown} className="sort-arrow" />
      </>
    )
  ) : (
    ''
  );
};

const defaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
  return (
    <FormGroup>
      <Input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder="Search..."
      />
    </FormGroup>
  );
};

const selectColumnFilter = ({
  column: { filterValue, setFilter, options },
}) => {
  const allOptions = [{ label: 'All', value: undefined }, ...options];
  return (
    <FormGroup className="min-width-select">
      <Select
        classNamePrefix="react_select"
        options={allOptions}
        isClearable
        value={filterValue}
        onChange={(value) => setFilter(value || undefined)}
      />
    </FormGroup>
  );
};

const getFilterParams = (filters) => {
  return filters.reduce(
    (filter, current) => ({
      ...filter,
      [current.id]:
        typeof current.value === 'object' && current.value !== null
          ? current.value.value
          : typeof current.value === 'string'
          ? getUrlEncodedValue(current.value).trim()
          : current.value,
    }),
    {},
  );
};

const getSortingParams = (sortBy) => ({
  sortBy: sortBy[0].id,
  sortOrder: sortBy[0].desc ? 'desc' : 'asc',
});
export {
  renderSortingArrows,
  defaultColumnFilter,
  selectColumnFilter,
  getFilterParams,
  getSortingParams,
};
