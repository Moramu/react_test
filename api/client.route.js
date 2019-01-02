const express = require('express');
const clientRoutes = express.Router();

// Require Client model in our routes module
let Client = require('./client.model');

// Defined client store route
clientRoutes.route('/add').post(function (req, res) {
  let client = new Client(req.body);
  client.save()
    .then(client => {
      res.status(200).json({'client': 'client in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get client data(index or listing) route
clientRoutes.route('/').get(function (req, res) {
  Client.find(function(err, clients){
    if(err){
      console.log(err);
    }
    else {
      res.json(clients);
    }
  });
});

//------- Dont work ---------------

// clientRoutes.route('/').get(function (req, res) {
//   Client.find({client_active:true}).then(function(err,clients) {
//     if(err){
//       console.log(err)
//     }
//     else {
//       res.json(clients);
//     }
//   })    
// });

// clientRoutes.route('/').get(function (req, res) {
//   Client.find({client_active:'true',function(err,clients) {
//     if(err){
//       console.log(err)
//     }
//     else {
//       res.json(clients);
//     }
//   }})
// });
   
//-------------------------------------   

// Defined client edit route
clientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Client.findById(id, function (err, client){
      res.json(client);
  });
});

//  Defined client update route
clientRoutes.route('/update/:id').post(function (req, res) {
    Client.findById(req.params.id, function(err, client) {
    if (!client)
      res.status(404).send("data is not found");
    else {
        client.client_fName = req.body.client_fName;
        client.client_lName = req.body.client_lName;
        client.client_dob = req.body.client_dob;
        client.client_ssn = req.body.client_ssn;
        client.client_address = req.body.client_address;
        client.client_phone = req.body.client_phone;
        client.client_status = req.body.client_status;
        client.client_income = req.body.client_income;
        client.client_notes = req.body.client_notes;
        client.client_active = req.body.client_active;
        client.save().then(client => {
          res.json('Update complete');

      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined client notes edit route
clientRoutes.route('/notes/:id').get(function (req, res) {
  let id = req.params.id;
  Client.findById(id, function (err, client){
      res.json(client);
  });
});

//  Defined  notes update route
clientRoutes.route('/notes_update/:id').post(function (req, res) {
    Client.findById(req.params.id, function(err, client) {
    if (!client)
      res.status(404).send("data is not found");
    else {
        client.client_notes = req.body.client_notes;
        client.save().then(client => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined search route
clientRoutes.route('/search').get(function (req, res) {
    Client.findByIdAndRemove({_id: req.params.id}, function(err, client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


// Defined delete | remove | destroy route
clientRoutes.route('/delete/:id').get(function (req, res) {
    Client.findByIdAndRemove({_id: req.params.id}, function(err, client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = clientRoutes;