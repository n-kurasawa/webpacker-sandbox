import React from 'react';
import Table from '../components/table';

export default class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    const key = props.headers[props.defaultSort || 0];
    const orderBy = 'asc';

    this.state = {
      rows: this._sort(props.rows, key, orderBy),
      order: {
        key: key,
        by: orderBy
      }
    };
  }

  sort(key) {
    const orderBy = this._switchOrder(key);

    const rows = this._sort(this.state.rows, key, orderBy);
    this.setState({
      rows: rows,
      order: {
        key: key,
        by: orderBy
      }
    });
  }

  _switchOrder(key) {
    let orderBy = 'asc';
    if (this.state.order.key === key) {
      if (this.state.order.by === 'asc') {
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
      <Table headers={this.props.headers} rows={this.state.rows} sort={this.sort.bind(this)} order={this.state.order} />
    );
  }
}