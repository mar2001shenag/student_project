import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.class}</td>
                <td>{student.division}</td>
                <td>{student.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;