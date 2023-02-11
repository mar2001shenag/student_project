import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      dob: '',
      class: '',
      division: '',
      gender: ''
    };
  }
  
  //handle input change
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  //handle form submit
  handleSubmit = (e) => {
    e.preventDefault();
    //Validate the input
    if (this.state.name === '' || this.state.dob === '' || this.state.class === '' || this.state.division === '' || this.state.gender === '') {
      alert('Please fill out the form completely');
      return;
    }
    

    
    //send the data to the parent component
    this.props.onFormSubmit(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" pattern="[a-zA-Z\s]+" onChange={this.handleChange} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={this.handleChange} />
        </div>
        <div>
          <label>Class:</label>
          <select name="class" onChange={this.handleChange}>
            <option value="">Select Class</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="V1">V1</option>
            <option value="V11">V11</option>
            <option value="V111">V111</option>
            <option value="1X">1X</option>
            <option value="X">X</option>
            <option value="X11">X11</option>
            <option value="X12">X12</option>
          </select>
        </div>
        <div>
          <label>Division:</label>
          <select name="division" onChange={this.handleChange}>
            <option value="">Select Division</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
