import React from 'react';
import ReactDOM from 'react-dom'

class OriginalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows
    }
  }

  sort(key) {
    const i = this.props.headers.indexOf(key);
    if (i === -1) { return; }

    const rows = this.state.rows.sort((before, after) => {
      const n = before[i] - after[i];
      if (!isNaN(n)) {
        return n;
      }
      if (before[i] < after[i]) {
        return -1;
      }
      if (before[i] > after[i]) {
        return 1;
      }
      return 0;
    });
    this.setState({rows: rows});
  }

  render() {
    return (
      <table border="1">
        <Header headers={this.props.headers} sort={this.sort.bind(this)}/>
        <Body rows={this.state.rows} />
      </table>
    );
  }
}

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
          { row.map((col, j) => <td key={`${j}`}>{col}</td>) }
        </tr>
      )
    }
  </tbody>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <OriginalTable headers={['name', 'age', 'other']} rows={[['倉澤', '29', 'hoge'], ['テスト', '2', 'test'], ['kkk', '100', 'abc']]} />,
    document.body.appendChild(document.createElement('div')),
  )
});
