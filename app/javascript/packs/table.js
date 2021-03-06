import React from 'react';
import ReactDOM from 'react-dom'
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Table extends React.Component {
  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }, {
      name: 'test',
      age: 22,
      friend: {
        name: 'sample',
        age: 20,
      },
    }, {
      name: 'Hoge',
      age: 24,
      friend: {
        name: 'Bar',
        age: 30,
      }
    }];

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      },
    ];

    return <ReactTable data={data} columns={columns}/>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Table />,
    document.body.appendChild(document.createElement('div')),
  )
})