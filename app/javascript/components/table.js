import React from 'react';

export default ({headers, rows, sort}) =>
  <table border="1">
    <Header headers={headers} sort={sort} />
    <Body rows={rows} />
  </table>;

const Header = ({headers, sort}) =>
  <thead>
  <tr>
    {
      headers.map((header, i) =>
        <th key={i} onClick={() => sort(header)}>{header}</th>
      )
    }
  </tr>
  </thead>;

const Body = ({rows}) =>
  <tbody>
  {
    rows.map((row, i) =>
      <tr key={i}>
        { row.map((col, j) => <td key={j}>{col}</td>) }
      </tr>
    )
  }
  </tbody>;