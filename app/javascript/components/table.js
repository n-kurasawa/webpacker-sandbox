import React from 'react';

export default ({headers, rows, sort, order}) =>
  <table border="1">
    <Header headers={headers} sort={sort} order={order}/>
    <Body rows={rows} />
  </table>;

const Header = ({headers, sort, order}) =>
  <thead>
    <tr>
      {
        headers.map((header, i) => {
          if (header === order.key) {
            return <th className={`${order.by} pointer`} key={i} onClick={() => sort(header)}>{header}</th>
          }
          return <th className="pointer" key={i} onClick={() => sort(header)}>{header}</th>
        })
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