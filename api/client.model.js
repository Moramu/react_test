const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Clients
let Client = new Schema({
  client_fName: {
    type: String
  },
  client_lName: {
    type: String
  },
  client_dob: {
    type: String
  },
  client_ssn: {
    type: Number
  },
  client_address: {
    type: String
  },
  client_phone: {
    type: Number
  },
  client_status: {
    type: String
  },
  client_income: {
    type: Number
  },
  client_notes: {
    type: String
  },
  client_active: {
    type: Boolean
  }
},{
    collection: 'clients'
});

module.exports = mongoose.model('Client', Client);