import React from 'react';

export default ({headers, sort, order}) =>
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