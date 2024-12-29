const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Define the validation schema for Patient
const patientSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    other_names: Joi.string(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    date_of_birth: Joi.date().iso().required(),
    marital_status: Joi.string().valid('Single', 'Married', 'Divorced', 'Widowed'),
    occupation: Joi.string(),
    phone_number: Joi.string(),
    id_card_number: Joi.string(),
    hospital_number: Joi.string(),
    created_by: Joi.string(),
    created_at: Joi.date().iso().optional(),
  });
  

// Define the validation schema for DoctorsRemark
const doctorsRemarkSchema = Joi.object({
  patient_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().custom((value, helpers) => {
    if (!ObjectId.isValid(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }),
  description: Joi.string().required(),
  created_by: Joi.string(),
  created_at: Joi.date().iso().optional(),
});

// Define the validation schema for PatientSigns
const patientSignsSchema = Joi.object({
  patient_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().custom((value, helpers) => {
    if (!ObjectId.isValid(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }),
  heart_rate: Joi.number().min(0).required(),
  respiratory_rate: Joi.number().min(0).required(),
  body_temperature: Joi.number().min(0).required(),
  height: Joi.number().min(0).required(),
  weight: Joi.number().min(0).required(),
  created_by: Joi.string(),
  created_at: Joi.date().iso().optional(),
});

// Define the validation schema for PatientVisit
const patientVisitSchema = Joi.object({
  patient_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().custom((value, helpers) => {
    if (!ObjectId.isValid(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }),
  description: Joi.string().required(),
  created_by: Joi.string(),
});


// Validate Patient data
const validatePatient = (req, res, next) => {
    const { error } = patientSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    next();
  };
  

// Validate DoctorsRemark data
const validateDoctorsRemark = (req, res, next) => {
  const { error } = doctorsRemarkSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

// Validate PatientSigns data
const validatePatientSigns = (req, res, next) => {
  const { error } = patientSignsSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

// Validate PatientVisit data
const validatePatientVisit = (req, res, next) => {
  const { error } = patientVisitSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  validatePatient,
  validateDoctorsRemark,
  validatePatientSigns,
  validatePatientVisit,
};
