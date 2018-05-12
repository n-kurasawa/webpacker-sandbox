import React from 'react';
import ReactDOM from 'react-dom'

const OriginalTable = ({headers, rows}) =>
  <table>
    <Header headers={headers} />
    <Body rows={rows} />
  </table>;

const Header = ({headers}) =>
  <thead>
  <tr>
    {
      headers.map((header) =>
        <th>{header}</th>
      )
    }
  </tr>
  </thead>;

const Body = ({rows}) =>
  <tbody>
  {
    rows.map((row) =>
      <tr>
        { row.map((col) => <td>{col}</td>) }
      </tr>
    )
  }
  </tbody>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <OriginalTable headers={['name', 'age', 'other']} rows={[['倉澤', '29', 'hoge'], ['テスト', '32', 'test']]} />,
    document.body.appendChild(document.createElement('div')),
  )
});
