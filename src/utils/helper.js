import React from 'react';

export const getItemFromStorage = (key) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItemInStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const removeItemFromStorage = (name) => {
  window.localStorage.removeItem(name);
};

export const gridNoRecord = (
  fetchingData,
  list,
  colSpan,
  waitMsg = 'Please wait while fetching records...',
  noRecordMsg = 'No record found to display.',
) => {
  if (fetchingData) {
    return (
      <tfoot>
        <tr>
          <td className="record-notfound" colSpan={colSpan}>
            <div>
              <i className="fa fa-refresh fa-spin fa-fw" />
              {waitMsg}
            </div>
          </td>
        </tr>
      </tfoot>
    );
  }
  if (list && list.length === 0) {
    return (
      <tfoot>
        <tr>
          <td className="record-notfound" colSpan={colSpan}>
            <div>
              <i className="fa fa-info-circle info-icon" />
              {noRecordMsg}
            </div>
          </td>
        </tr>
      </tfoot>
    );
  }
  return null;
};
export const listNoRecord = (
  fetchingData,
  list,
  waitMsg = 'Please wait while fetching records...',
  noRecordMsg = 'No record found to display.',
) => {
  if (fetchingData) {
    return (
      <div className="list-notfound">
        <i className="fa fa-refresh fa-spin fa-fw" />
        {waitMsg}
      </div>
    );
  }
  if (list && list.length === 0) {
    return (
      <div className="list-notfound">
        <i className="fa fa-info-circle info-icon" />
        {noRecordMsg}
      </div>
    );
  }
  return null;
};

export const getFileStorageBaseUrl = () => {
  return 'https://thumbs.preview.com';
};
