import React from 'react';
import ReactDOM from 'react-dom'

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    const key = props.headers[props.defaultSort || 0];
    const orderBy = 'asc';

    this.state = {
      rows: this._sort(props.rows, key, orderBy),
      order: {
        key: key,
        orderBy: orderBy
      }
    };
  }

  sort(key) {
    let orderBy = this._switchOrder(key);

    const rows = this._sort(this.state.rows, key, orderBy);
    this.setState({
      rows: rows,
      order: {
        key: key,
        orderBy: orderBy
      }
    });
  }

  _switchOrder(key) {
    let orderBy = 'asc';
    if (this.state.order.key === key) {
      if (this.state.order.orderBy === 'asc') {
        orderBy = 'desc';
      } else {
        orderBy = 'asc';
      }
    }
    return orderBy;
  }

  _sort(rows, key, orderBy) {
    const i = this.props.headers.indexOf(key);
    if (i === -1) { return rows }

    return rows.sort((before, after) => {
      let beforeColumn, afterColumn;
      if (orderBy === 'desc') {
        beforeColumn = after[i];
        afterColumn = before[i];
      } else {
        beforeColumn = before[i];
        afterColumn = after[i];
      }

      const n = beforeColumn - afterColumn;
      if (!isNaN(n)) {
        return n;
      }
      if (beforeColumn < afterColumn) {
        return -1;
      }
      if (beforeColumn > afterColumn) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <Table headers={this.props.headers} rows={this.state.rows} sort={this.sort.bind(this)} />
    );
  }
}

const Table = ({headers, rows, sort}) =>
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TableContainer headers={['name', 'age', 'other']} rows={[['倉澤', '29', 'hoge'], ['テスト', '2', 'test'], ['kkk', '100', 'abc']]} defaultSort={0}/>,
    document.body.appendChild(document.createElement('div')),
  )
});
