import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  
  //handle form submit
  handleFormSubmit = (student) => {
    
    
  
    this.setState({
      students: [...this.state.students, student]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Student Form</h1>
        <Form onFormSubmit={this.handleFormSubmit} />
        <Table students={this.state.students} />
      </div>
    );
  }
}

export default App;
