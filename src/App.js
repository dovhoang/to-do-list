import React, { Component } from 'react';
import './App.css';
import Title from './components/Titile';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';
import _ from 'lodash'
const listTagsFull = [
  {
    id: 0,
    name: "Do reactJS exercises",
    pirioty: 0
  },
  {
    id: 1,
    name: "Read book",
    pirioty: 1
  },
  {
    id: 2,
    name: "Learn guitar",
    pirioty: 2
  },
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShow: false,
      searchStr: '',
      sort: null
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);

  }
  handleToggleForm() {
    this.setState({ isFormShow: !this.state.isFormShow })
  }

  handleSearch(value) {
    this.setState(
      {
        searchStr: value,
        sort: null
      }

    );

  }

  handleSort(option) {
    this.setState({ sort: option })
  }

  handleSubmitAddTag(name, pirioty) {

    listTagsFull.push(
      {
        id: 0,
        name: name,
        pirioty: pirioty,
      }
    );
  }
  render() {
    let elmForm = null;
    let isShowForm = this.state.isFormShow;
    let listTag = [];
    let searchStr = this.state.searchStr;
    let sort = this.state.sort;
    if (searchStr.length > 0) {
      listTag = _.filter(listTagsFull, (item) => {
        return _.includes(item.name.toLowerCase(), searchStr.toLowerCase());
      });
    } else {
      listTag = listTagsFull;
    }
    if (isShowForm) {
      elmForm = <Form onClickSubmitForm={this.handleToggleForm} />
    }
    if (sort !== null) {
      console.log(sort);
      if (sort) {
        listTag = _.orderBy(listTag, ['name', 'id'], ['asc', 'asc']);
      } else {
        listTag = _.orderBy(listTag, ['name', 'id'], ['desc', 'desc']);
      }

    }
    return (
      <div className="App ">
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <Title />
            <Control
              onClickAddTag={this.handleToggleForm}
              onClickSearch={this.handleSearch}
              onClickSort={this.handleSort}
              onClickSubmitAddTag={this.handleSubmitAddTag}
            />
            <div className="row justify-content-end">
              <div className="col-md-6">
                {elmForm}
              </div>
            </div>
            <Table items={listTag} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
