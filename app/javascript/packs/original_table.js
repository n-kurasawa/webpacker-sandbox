import React from 'react';
import ReactDOM from 'react-dom'
import TableContainer from '../containers/table-container';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TableContainer headers={['name', 'age', 'other']} rows={[['倉澤', '29', 'hoge'], ['テスト', '2', 'test'], ['kkk', '100', 'abc']]} defaultSort={1}/>,
    document.body.appendChild(document.createElement('div')),
  )
});
