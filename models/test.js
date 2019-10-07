const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  patientName: String,
  patientHeight: Number,
  patientWeight: Number,
  patientDOB: Date,
});

mongoose.model('tests', testSchema);
