import React from 'react';
import Header from './header';
import Body from './body';

export default ({headers, rows, sort, order}) =>
  <table border="0">
    <Header headers={headers} sort={sort} order={order}/>
    <Body rows={rows} />
  </table>;
