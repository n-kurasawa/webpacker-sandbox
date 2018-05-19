import React from 'react';
import Header from './header';
import Body from './body';
import styled from 'styled-components';

export default ({headers, rows, sort, order}) =>
  <Table border="1">
    <Header headers={headers} sort={sort} order={order}/>
    <Body rows={rows} />
  </Table>;

const Table = styled.table`
  display: block;
  position: relative;
  overflow: scroll;
  width: calc(100vw - 3.0rem);
  // height: calc(75vh);
`;