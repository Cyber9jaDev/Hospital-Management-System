const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  other_names: String,
  gender: String,
  date_of_birth: Date,
  marital_status: String,
  occupation: String,
  phone_number: String,
  id_card_number: String,
  hospital_number: String,
  created_by: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Patient', patientSchema);
