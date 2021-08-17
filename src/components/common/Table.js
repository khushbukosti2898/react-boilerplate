/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from 'reactstrap';
import Select from 'react-select';
import { defaultColumnFilter, renderSortingArrows } from './TableHelper';
import Button from './Button';

const Table = ({
  columns,
  data,
  handleTableCellClick,
  loading,
  hideActionCol,
  rowProps,
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: defaultColumnFilter,
    }),
    [],
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination,
  );
  return (
    <div>
      <div className="table-responsive custom-table custom-scroll">
        <table {...getTableProps()} className="table table-md">
          <thead className="thead-dark">
            {headerGroups.map((headerGroup, headerId) => (
              <React.Fragment key={headerId}>
                <tr
                  {...headerGroup.getHeaderGroupProps({
                    className: 'table-header',
                  })}
                >
                  {headerGroup.headers.map((column, headerCloumnId) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
                        key={headerCloumnId}
                        title={column.Header}
                      >
                        <span className="d-flex justify-content-between">
                          {column.render('Header')}
                          <span
                            className="sort-arrow-container"
                            title="Toggle SortBy"
                          >
                            {renderSortingArrows(column)}
                          </span>
                        </span>
                      </th>
                    );
                  })}
                  {!hideActionCol && <th className="action-col">Action</th>}
                </tr>
                <tr
                  {...headerGroup.getHeaderGroupProps({
                    className: 'filters',
                  })}
                  key={`filter-${headerId}`}
                >
                  {headerGroup.headers.map((column, headerCloumnId) => (
                    <th key={`filter-${headerCloumnId}`}>
                      {column.canFilter ? column.render('Filter') : null}
                    </th>
                  ))}
                  <th>
                    <span className="d-none">Action</span>
                  </th>
                </tr>
              </React.Fragment>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {loading ? (
              <tr className="no-records">
                <td colSpan={columns.length + 2}>Loading...</td>
              </tr>
            ) : pageOptions && pageOptions.length > 0 ? (
              page.map((row, rowId) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} {...rowProps(row)} key={rowId}>
                    {row.cells.map((cell, cellId) => {
                      const className =
                        cell &&
                        cell.column &&
                        cell.column.showModal &&
                        cell.row.allCells[cellId].value !== ''
                          ? 'show-modal'
                          : '';
                      return cell.row.allCells[cellId].value !== '' ? (
                        <td
                          {...cell.getCellProps({
                            onClick: () =>
                              handleTableCellClick(
                                cell.column.id,
                                cell.row.original,
                              ),
                            className: `${className}`,
                          })}
                          key={cellId}
                        >
                          {cell.render('Cell')}
                        </td>
                      ) : (
                        <td
                          {...cell.getCellProps({
                            className: `${className}`,
                          })}
                          key={cellId}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                    {!hideActionCol && (
                      <td className="action-col">
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          className="cursor-pointer"
                          size="1x"
                          title="Edit"
                          onClick={() => console.log('edit', row.original)}
                        />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          size="1x"
                          className="cursor-pointer mx-3"
                          title="Delete"
                          onClick={() => console.log('delete', row.original)}
                        />
                      </td>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr className="no-records" align="center">
                <td colSpan={columns.length + 2 + (hideActionCol ? 2 : 0)}>
                  No data found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pageOptions.length > 0 && (
        <div className="pagination d-flex align-items-center">
          <Button
            onClickFunc={() => gotoPage(0)}
            disabled={!canPreviousPage}
            text="<<"
          />
          <Button
            onClickFunc={() => previousPage()}
            disabled={!canPreviousPage}
            text="<"
            className="mx-2"
          />
          <Button
            onClickFunc={() => nextPage()}
            disabled={!canNextPage}
            text=">"
            className="mx-2"
          />
          <Button
            onClickFunc={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            text=">>"
            className="mx-2"
          />
          <span>
            Page
            <strong>
              {pageIndex + 1}
              of
              {pageOptions.length}
            </strong>
          </span>
          <FormGroup className="mb-md-0" style={{ width: 100 }}>
            <Select
              name="pageSize"
              classNamePrefix="react_select"
              className=" mx-2"
              options={[
                { label: '10', value: 10 },
                { label: '50', value: 50 },
                { label: '100', value: 100 },
                { label: '200', value: 200 },
                { label: '300', value: 300 },
              ]}
              menuPlacement="top"
              isClearable={false}
              onChange={(selectedData) => {
                setPageSize(selectedData.value);
              }}
              defaultValue={{ label: '5', value: 5 }}
            />
          </FormGroup>
        </div>
      )}
    </div>
  );
};

Table.defaultProps = {
  handleTableCellClick: () => {},
  loading: false,
  showModalOnId: false,
  currentPage: 1,
  initialSortBy: [],
  onChangeSort: () => {},
  initialFilters: [],
  showPageSize: false,
  actionDeleteDisabled: () => false,
  actionEditDisabled: () => false,
  groupCols: false,
  getSlelectedRow: () => {},
  name: '',
  hideActionCol: false,
  rowProps: () => {},
  totalPages: 1,
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleTableCellClick: PropTypes.func,
  loading: PropTypes.bool,
  showModalOnId: PropTypes.bool,
  currentPage: PropTypes.number,
  initialSortBy: PropTypes.array,
  onChangeSort: PropTypes.func,
  initialFilters: PropTypes.array,
  totalPages: PropTypes.number,
  showPageSize: PropTypes.bool,
  actionDeleteDisabled: PropTypes.func,
  actionEditDisabled: PropTypes.func,
  groupCols: PropTypes.bool,
  name: PropTypes.string,
  getSlelectedRow: PropTypes.func,
  hideActionCol: PropTypes.bool,
  rowProps: PropTypes.func,
};

export default Table;
