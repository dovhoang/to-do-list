import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pirioty: -1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePirioty = this.handleChangePirioty.bind(this);
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.pirioty);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleChangePirioty(event) {
    this.setState({ pirioty: event.target.value });
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-md-6 my-1">
            <label className="sr-only" htmlFor="inlineFormInputName">Tag name</label>
            <input value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" name="name" placeholder="Tag name..." />
          </div>
          <div className="col-md-4 my-1">

            <select value={this.state.pirioty} onChange={this.handleChangePirioty} className="custom-select" id="pirioty">
              <option selected disabled value={-1}>Select pirioty..</option>
              <option value={0} >High</option>
              <option value={1}>Medium</option>
              <option value={2}>Low</option>
            </select>
          </div>
          <div className="col-auto my-1">
            <button type="submit" className="btn btn-outline-success">Submit</button>
          </div>
        </div>
      </form>
    );
  };
}

export default Form;
