import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './client_table.component';
import '../../App.css';

export default class Index extends Component {
  constructor(props) {
      super(props);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onClearQuery = this.onClearQuery.bind(this);
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
    this.setState({query});
    // console.log(this.state.query)
    query !== "" ? this.onSearchQuery(query) : this.onClearQuery();
  }

  onSearchQuery(query) {
    // console.log(query);
    axios.get('http://localhost:4000/client/search/'+query).then(response => {console.log(response)});
    // axios.get('http://localhost:4000/client/search/'+this.props.match.params.query).then(response => {console.log(response)});
  }

  onClearQuery(){
    this.setState({ query:''});
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
          <div className="search row">
              <div className="form-group col-md-8">
              <input
                placeholder="Search for client..."
                className="form-control" 
                value={this.state.query}
                onChange={event => this.onSearchChange(event.target.value)}
              />
              </div>
               <div className="form-group col-md-4">
              <button onClick={this.onClearQuery} className="btn btn-danger">Clear</button>
              </div>
          </div>
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