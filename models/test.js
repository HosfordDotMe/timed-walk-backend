const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  patientName: String,
  patientHeight: Number,
  patientWeight: Number,
  patientDOB: Date,
  patientNotes: String,

  testDate: Date,
  testDistance: Number,
  testNotes: String,

  completionTime: Number,
  completionNotes: String
});

mongoose.model('tests', testSchema);
