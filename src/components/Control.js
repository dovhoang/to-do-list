import React, { Component } from 'react';
import Form from './Form';
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      searchStr: '',
    };
    this.addTagClick = this.addTagClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSortASC = this.handleSortASC.bind(this);
    this.handleSortDESC = this.handleSortDESC.bind(this);
  }

  addTagClick() {
    this.props.onClickAddTag();
  }



  handleChange(event) {
    this.setState({ searchStr: event.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.onClickSearch(this.state.searchStr);
  }

  handleSortASC() {
    this.props.onClickSort(true);
  }

  handleSortDESC() {
    this.props.onClickSort(false);
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={this.handleSearch} >
            <div className="input-group mb-3">
              <input value={this.state.searchStr} onChange={this.handleChange} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit" id="button-addon2">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <div className="dropdown open">
            <button className="btn btn-secondary dropdown-toggle " type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sortby tag name
              </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <button onClick={this.handleSortASC} className="dropdown-item" >ASC</button>
              <button onClick={this.handleSortDESC} className="dropdown-item" >DESC</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <button onClick={this.addTagClick} type="button" className="btn btn-primary btn-block" data-toggle="button" aria-pressed="false" autoComplete="off">Add Tag</button>
        </div>
      </div>
    );
  };
}

export default Control;
