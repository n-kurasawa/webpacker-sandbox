import React from 'react';
import styled from 'styled-components';

export default ({rows}) =>
  <Tbody>
    {
      rows.map((row, i) =>
        <tr key={i}>
          { row.map((col, j) => <Column key={j} index={j} text={col} />) }
        </tr>
      )
    }
  </Tbody>;

const Column = ({index, text}) =>
  <Td>
    {textOption(index, text)}
  </Td>;

const textOption = (index, text) => {
  if (index === 1) {
    return <a href="#">{text}</a>
  }
  return text;
};

const Tbody = styled.tbody`
  display: block;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
`;

const Td = styled.td`
 
`;