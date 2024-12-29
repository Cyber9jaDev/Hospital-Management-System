const mongoose = require('mongoose');

const patientSignsSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  heart_rate: Number,
  respiratory_rate: Number,
  body_temperature: Number,
  height: Number,
  weight: Number,
  created_by: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PatientSigns', patientSignsSchema);
