import React from 'react';

export default ({rows}) =>
  <tbody>
    {
      rows.map((row, i) =>
        <tr key={i}>
          { row.map((col, j) => <Column key={j} index={j} text={col} />) }
        </tr>
      )
    }
  </tbody>;

const Column = ({index, text}) =>
  <td>
    {textOption(index, text)}
  </td>;

const textOption = (index, text) => {
  if (index === 1) {
    return <a href="#">{text}</a>
  }
  return text;
};