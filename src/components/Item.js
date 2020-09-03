import React, { Component } from 'react';
import '../css/Style.css'
class Item extends Component {
    showPirioty(item) {
        if (item.pirioty === 0) {
            return <span id="pHigh">High</span>
        } else if (item.pirioty === 1) {
            return <span id="pMedium">Medium</span>
        } else if (item.pirioty === 2) {
            return <span id="pLow">Low</span>
        }
    }
    render() {
        var item = this.props.item;
        return (
            <tr>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td> {this.showPirioty(item)}</td>
                <td >
                    <div className="row d-flex justify-content-around">
                        <button type="button" className="btn btn-outline-info"><i className="fa fa-pencil" aria-hidden="true" /></button>
                        <button type="button" className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true" /></button>
                    </div>
                </td>
            </tr>
        );
    };
}

export default Item;
