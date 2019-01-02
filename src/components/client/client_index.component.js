import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './client_table.component';

export default class Index extends Component {
  constructor(props) {
      super(props);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.state = {
        clients: [],
        query:''
      };
    }
  componentDidMount(){
    axios.get('http://localhost:4000/client')
      .then(response => {
        this.setState({ clients: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onSearchChange(query){ 
   
  }

    clientTableRow(){
      return this.state.clients.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Active Clients</h3>
          <form>
            <input
              placeholder="Search for..."
              className="form-control" 
              value={this.state.query}
              onChange={this.onSearchChange}
            />
          </form>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Address</th>
                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.clientTableRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }