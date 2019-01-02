import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
   constructor(props) {
      super(props);
      this.onChangeNotes = this.onChangeNotes.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        client_fName: '',
        client_lName: '',
        client_notes: ''
      }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/client/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                client_fName: response.data.client_fName,
                client_lName: response.data.client_lName,
                client_notes: response.data.client_notes
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNotes(e) {
    this.setState({
      client_notes: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      client_notes: this.state.client_notes
    };
    axios.post('http://localhost:4000/client/notes_update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
              <h3>Notes of:</h3>
              <div className="person">
                <h3>{this.state.client_fName} {this.state.client_lName} </h3>
              </div>

              <form onSubmit={this.onSubmit} onChange={this.onChange}>
                  <div className="form-group">
                      <label>Notes: </label>
                      <textarea 
                        className="form-control"
                        value={this.state.client_notes}
                        onChange={this.onChangeNotes}
                        />
                  </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Client Information" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}