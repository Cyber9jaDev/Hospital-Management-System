const express = require('express');
const patientVisitRouter = express.Router();
const patientVisitController = require('../../controllers/patient-module/PatientVisitController');
const {validatePatientVisit} = require('../../middleware/validations/patientValidation')

patientVisitRouter.route('/visits')
  .post(validatePatientVisit, patientVisitController.createPatientVisit)
  .get(patientVisitController.getAllPatientVisits);

patientVisitRouter.route('/visits/:id')
  .get(patientVisitController.getPatientVisitById)
  .put(validatePatientVisit, patientVisitController.updatePatientVisit)
  .delete(patientVisitController.deletePatientVisit);

module.exports = patientVisitRouter;
