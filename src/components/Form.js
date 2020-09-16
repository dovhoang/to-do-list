import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      pirioty: '-1',
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePirioty = this.handleChangePirioty.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onClickSubmitForm(this.state.id === '' ? -1 : this.state.id,
      this.state.name, this.state.pirioty)
    this.props.onClickAddTag();
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleChangePirioty(event) {
    this.setState({ pirioty: event.target.value });
  }
  componentWillMount() {
    if (this.props.dataUpdate) {
      this.setState({
        id: this.props.dataUpdate.id,
        name: this.props.dataUpdate.name,
        pirioty: this.props.dataUpdate.pirioty,
      })
    }
  }

  handleCancel() {
    this.props.onClickCancel();
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-md-6 my-1">
            <label className="sr-only" htmlFor="inlineFormInputName">Tag name</label>
            <input required value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" name="name" placeholder="Tag name..." />
          </div>
          <div className="col-md-4 my-1">

            <select required value={this.state.pirioty} onChange={this.handleChangePirioty} className="custom-select" id="pirioty">
              <option disabled value={-1}>Select pirioty..</option>
              <option defaultValue value={0} >High</option>
              <option value={1}>Medium</option>
              <option defaultValue value={2}>Low</option>
            </select>
          </div>
          <div className="col-auto my-1">
            <button type="submit" className="btn btn-outline-success mr-3">Submit</button>
            <button onClick={this.handleCancel} type="button" className="btn btn-outline-danger" data-toggle="button" aria-pressed="false" autoComplete="off">Cancel</button>

          </div>
        </div>
      </form>
    );
  };
}

export default Form;
