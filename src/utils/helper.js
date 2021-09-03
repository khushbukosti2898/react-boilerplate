import React from 'react';

import moment from 'moment';

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

const hourLabels = () => {
  const hoursPerDay = 24;
  const time = [];
  let formattedTime;
  for (let i = 0; i < hoursPerDay; i++) {
    const cuurentDay = moment().startOf('d');
    formattedTime = cuurentDay.add(i, 'hours').format('HH:mm');
    time.push(formattedTime);
  }
  return time;
};

const dateLabels = (start, end, format) => {
  const time = [];
  for (
    let i = moment(start).format();
    i < end;
    i = moment(i).add(1, 'day').format()
  ) {
    const formattedTime = moment(i).format(format || 'lll');
    time.push(formattedTime);
  }
  return time;
};

export const monthLabels = () => {
  const dayPerWeek = 12;
  const time = [];
  for (let i = 0; i < dayPerWeek; i++) {
    const fistDayOfYear = moment().subtract(1, 'year').add(1, 'month');
    time.push(fistDayOfYear.add(i, 'M').format('MMM, YYYY'));
  }
  return time;
};

export const timePeriodValue = (type) => {
  let labels = [];
  let startTime = null;
  let endTime = null;
  const startDate = moment().startOf('day');
  switch (type) {
    case 'yesterday':
      labels = hourLabels();
      startTime = moment().subtract(1, 'd').startOf('day').utc().format();
      endTime = moment().subtract(1, 'd').endOf('day').utc().format();
      break;
    case 'today':
      labels = hourLabels();
      startTime = moment().startOf('day').utc().format();
      endTime = moment().endOf('day').utc().format();
      break;
    case 'week':
      endTime = startDate.utc().format();
      startTime = startDate.subtract(1, 'week').utc().format();
      labels = dateLabels(startTime, endTime, 'ddd, DD MMM');
      break;
    case 'month':
      endTime = startDate.utc().format();
      startTime = startDate.subtract(1, 'month').utc().format();
      labels = dateLabels(startTime, endTime, 'DD MMM');
      break;
    case 'year':
      labels = monthLabels();
      endTime = startDate.utc().format();
      startTime = startDate.subtract(1, 'year').utc().format();
      break;
    default:
      break;
  }
  return { labels, startTime, endTime };
};

export const checkDateInPeriod = (date) => {
  return moment(date).diff(moment(), 'days');
};
