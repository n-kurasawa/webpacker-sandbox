import React from 'react';
import styled from 'styled-components';

export default ({headers, sort, order}) =>
  <Thead>
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
  </Thead>;

const Thead = styled.thead`
  display: block;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
`;