import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/client/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.client_fName}
          </td>
          <td>
            {this.props.obj.client_lName}
          </td>
          <td>
            {this.props.obj.client_phone}
          </td>
          <td>
            {this.props.obj.client_address}
          </td>
          <td>
            <Link to={"/notes/"+this.props.obj._id} className="btn btn-secondary">Notes</Link>
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;