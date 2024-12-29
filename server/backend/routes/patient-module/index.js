const express = require('express');
const patientBaseRouter = express.Router();

const doctorRemarksRouter = require('./DoctorRemarksRoute'); 
const patientRouter = require('./PatientRoute');
const patientSignsRouter = require('./PatientsSignsRoute');
const patientVisitRouter = require('./PatientVisitRoute');

// Apply a common base path for all patient module routes
patientBaseRouter.use('/', [
  doctorRemarksRouter,
  patientRouter,
  patientSignsRouter,
  patientVisitRouter
]);

module.exports = patientBaseRouter;
