const mongoose = require('mongoose');

const doctorsRemarkSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  description: String,
  created_by: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DoctorsRemark', doctorsRemarkSchema);
