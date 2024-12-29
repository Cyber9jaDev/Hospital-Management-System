const express = require('express');
const patientRouter = express.Router();
const patientController = require('../../controllers/patient-module/PatientController.js.js');
const {validatePatient} = require('../../middleware/validations/patientValidation.js')

patientRouter.route('/')
  .post(validatePatient, patientController.createPatient)
  .get(patientController.getAllPatients);

patientRouter.route('/:id')
  .get(patientController.getPatientById)
  .put(validatePatient,patientController.updatePatient)
  .delete(patientController.deletePatient);

module.exports = patientRouter;
