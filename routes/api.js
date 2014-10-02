var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ContactSchema= new Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String }
});

var ContactModel = mongoose.model('Contact', ContactSchema); 
mongoose.connect('mongodb://localhost/agenda');

exports.contacts = function (req, res) {
  return ContactModel.find(function (err, contacts) {
    if (!err) {
      res.json(contacts);
    } else {
      console.log(err);
    }
  });
};


exports.add = function(req, res) {
    var contact = req.body;
    contact = new ContactModel({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email

    });
    contact.save(function (err) {
      if (!err) {
        res.json(true);
      } else {
        console.log(err);
        res.json(false);
      }
    });
    return res.jsonp(req.body);
};

exports.edit = function (req, res) {
  var id = req.params.id;
  if (id) {
    ContactModel.findById(id, function (err, contact) {
      contact.name = req.body.name,
      contact.phone = req.body.phone,
      contact.email = req.body.email

      contact.save(function (err) {
        if (!err) {
          res.json(true);
        } else {
          res.json(false);
          console.log(err);
        }
      });
    });
  }
};

exports.delete = function (req, res) {
  var id = req.params.id;
  if (id) {
    ContactModel.findById(id, function (err, contact) {
      contact.remove(function (err) {
        if (!err) {
          res.json(true);
        } else {
          res.json(false)
          console.log(err);
        }
      });
    });
  }
};