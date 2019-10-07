const mongoose = require("mongoose");
const Test = mongoose.model("tests");

exports.test_list = function(req, res) {
  Test.find({}).then(function(tests) {
    res.send(tests);
  });
};

exports.test_detail = function(req, res) {
  Test.findById(req.params.id).then(function(test) {
    res.send(test);
  })
};

exports.test_create_post = (req, res, next) => {
  var test = new Test({
    patientName: req.body.patientName,
    patientHeight: req.body.patientHeight,
    patientWeight: req.body.patientWeight,
    patientDOB: req.body.patientDOB,
  });
  test.save(function(err) {
    if (err) {
      return next(err);
    }
    res.location(`/test/${test._id}`);
    res.sendStatus(201);
  });
};

exports.test_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Test create GET");
};

exports.test_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Test delete GET");
};

exports.test_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Test delete POST");
};

exports.test_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Test update GET");
};

exports.test_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Test update POST");
};
