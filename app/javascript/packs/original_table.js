import React from 'react';
import ReactDOM from 'react-dom'
import TableContainer from '../containers/table-container';

document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(document.getElementById('table_data').dataset.json);

  ReactDOM.render(
    <TableContainer headers={data.headers} rows={data.rows} defaultSort={data.default_sort}/>,
    document.body.appendChild(document.createElement('div')),
  )
});
