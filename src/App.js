import React, { Component } from 'react';
import './App.css';
import Title from './components/Titile';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';
import _ from 'lodash'
var listTagsFull = [
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
      items: listTagsFull,
      isFormShow: false,
      searchStr: '',
      sort: null,
      dataUpdate: null,
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmitAddTag = this.handleSubmitAddTag.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);

  }
  handleToggleForm() {
    this.setState({
      isFormShow: !this.state.isFormShow,
      dataUpdate: null
    })
  }

  handleSearch(value) {
    this.setState({
      searchStr: value,
      sort: null
    }
    );
    let listTag = this.state.items;
    let searchStr = value;
    if (searchStr.length > 0) {
      listTag = _.filter(listTagsFull, (item) => {
        return _.includes(item.name.toLowerCase(), searchStr.toLowerCase());
      });
    } else {
      listTag = listTagsFull;
    }
    this.setState({ items: listTag })

  }

  handleSort(option) {
    this.setState({ sort: option })
    let listTag = this.state.items;
    if (option !== null) {
      if (option) {
        listTag = _.orderBy(listTag, ['name', 'id'], ['asc', 'asc']);
      } else {
        listTag = _.orderBy(listTag, ['name', 'id'], ['desc', 'desc']);
      }
    }
    this.setState({ items: listTag })
  }



  handleSubmitAddTag(id, name, pirioty) {
    console.log(id, name, pirioty)
    let list = this.state.items;
    if (id === -1) {
      let maxId = list.reduce(
        (max, character) => (character.id > max ? character.id : max),
        list[0].id
      );
      list.push(
        {
          id: maxId + 1,
          name: name,
          pirioty: parseInt(pirioty),
        }
      );
    } else {
      let index = list.findIndex(tag => tag.id === id)
      list.splice(index, 1, { id, name, pirioty })
    }

    this.setState({ items: list })
  };

  handleDelete(id) {

    let listTags = this.state.items.filter(x => {
      return x.id !== id;
    })
    this.setState({
      items: listTags
    })
  }

  handleUpdate(item) {
    console.log('update')
    this.setState({
      isFormShow: true,
      dataUpdate: item
    });

  }

  onClickCancel() {
    this.setState({
      isFormShow: false,
      dataUpdate: null
    })
  }


  render() {
    let elmForm = null;
    let isShowForm = this.state.isFormShow;

    if (isShowForm) {
      elmForm = <Form
        onClickSubmitForm={this.handleSubmitAddTag}
        onClickAddTag={this.handleToggleForm}
        onClickCancel={this.onClickCancel}
        dataUpdate={this.state.dataUpdate}
      />
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
            />
            <div className="row justify-content-end">
              <div className="col-md-6">
                {elmForm}
              </div>
            </div>
            <Table
              onClickDelete={this.handleDelete}
              onClickUpdate={this.handleUpdate}
              items={this.state.items} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
