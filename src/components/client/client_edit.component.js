import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
   constructor(props) {
      super(props);
      this.onChangefName = this.onChangefName.bind(this);
      this.onChangelName = this.onChangelName.bind(this);
      this.onChangeDob = this.onChangeDob.bind(this);
      this.onChangeSsn = this.onChangeSsn.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.onChangeIncome = this.onChangeIncome.bind(this);
      this.onChangeNotes = this.onChangeNotes.bind(this);
      this.onChangeActive = this.onChangeActive.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        client_fName: '',
        client_lName: '',
        client_dob: '',
        client_ssn: '',
        client_address: '',
        client_phone: '',
        client_status: '',
        client_income: '',
        client_notes: '',
        client_active: ''
      }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/client/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                client_fName: response.data.client_fName,
                client_lName: response.data.client_lName,
                client_dob: response.data.client_dob,
                client_ssn: response.data.client_ssn,
                client_address: response.data.client_address,
                client_phone: response.data.client_phone,
                client_status: response.data.client_status,
                client_income: response.data.client_income,
                client_notes: response.data.client_notes,
                client_active: response.data.client_active
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangefName(e) {
    this.setState({
      client_fName: e.target.value
    });
  }
  onChangelName(e) {
    this.setState({
      client_lName: e.target.value
    })  
  }
  onChangeDob(e) {
    this.setState({
      client_dob: e.target.value
    })
  }
  onChangeSsn(e) {
    this.setState({
      client_ssn: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      client_address: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      client_phone: e.target.value
    });
  }
  onChangeStatus(e) {
    this.setState({
      client_status: e.target.value
    });
  }
  onChangeIncome(e) {
    this.setState({
      client_income: e.target.value
    });
  }
  onChangeNotes(e) {
    this.setState({
      client_notes: e.target.value
    });
  }
  onChangeActive(e) {
      this.setState({
      client_active: e.target.checked
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      client_fName: this.state.client_fName,
      client_lName: this.state.client_lName,
      client_dob: this.state.client_dob,
      client_ssn: this.state.client_ssn,
      client_address: this.state.client_address,
      client_phone: this.state.client_phone,
      client_status: this.state.client_status,
      client_income: this.state.client_income,
      client_notes: this.state.client_notes,
      client_active: this.state.client_active
    };
    axios.post('http://localhost:4000/client/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
              <h3>Edit Person</h3>
              <form onSubmit={this.onSubmit} onChange={this.onChange}>
                  <div className="form-group">
                      <label>Person First Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.client_fName}
                        onChange={this.onChangefName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Last Name: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.client_lName}
                        onChange={this.onChangelName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Date of Birth:</label>
                      <input type="text"
                       className="form-control"  
                       value={this.state.client_dob}
                       onChange={this.onChangeDob}
                       />
                  </div>
                  <div className="form-group">
                      <label>SSN: </label>
                      <input type="number" 
                        className="form-control"
                        value={this.state.client_ssn}
                        onChange={this.onChangeSsn}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Address: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.client_address}
                        onChange={this.onChangeAddress}
                        />
                  </div>
                  <div className="form-group">
                      <label>Phone Number: </label>
                      <input type="number" 
                        className="form-control"
                        value={this.state.client_phone}
                        onChange={this.onChangePhone}
                        />
                  </div>
                  <div className="form-group">
                      <label>Immigration Status: </label>
                        <select className='form-control' value={this.state.client_status} onChange={this.onChangeStatus}>
                          <option value="citizen">Citizen</option>
                          <option value="ead">EAD</option>
                          <option value="creen card">Green Card</option>
                          <option value="i-797">I-797</option>
                          <option value="visa">Visa</option>
                          <option value="f-1">F-1</option>
                          <option value="other">Other</option>
                        </select>
                  </div>
                  <div className="form-group">
                      <label>Income: </label>
                      <input type="number" 
                        className="form-control"
                        value={this.state.client_income}
                        onChange={this.onChangeIncome}
                        />
                  </div>
                  <div className="form-group">
                      <label>Notes: </label>
                      <textarea 
                        className="form-control"
                        value={this.state.client_notes}
                        onChange={this.onChangeNotes}
                        />
                  </div>
                  <div className="form-group">
                      <label>Active: </label>
                      <input
                        type="checkbox"
                        className="form-control"
                        checked={this.state.client_active}
                        onChange={this.onChangeActive} 
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