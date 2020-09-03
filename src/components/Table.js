import React, { Component } from 'react';
import Item from './Item';
import '../css/Style.css'
class Table extends Component {

  render() {
    let items = this.props.items;
    var showTag = items.map((item, index) =>
      <Item key={index} item={item} />
    );
    return (
      <div className="row justify-content-center mt-4">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              Tags list
              </div>
            <div class="card-body">
              <table className="table" >
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th >Tag</th>
                    <th >Pirioty</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {showTag}
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              Total tags: {this.props.items.length}
            </div>
          </div>
        </div>
      </div >
    );
  };
}

export default Table;
