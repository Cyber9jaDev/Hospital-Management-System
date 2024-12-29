const express = require('express');
const patientSignsRouter = express.Router();
const patientSignsController = require('../../controllers/patient-module/PatientSignsController');
const {validatePatientSigns} = require('../../middleware/validations/patientValidation')

patientSignsRouter.route('/signs')
  .post(validatePatientSigns, patientSignsController.createPatientSigns)
  .get(patientSignsController.getAllPatientSigns);

patientSignsRouter.route('/signs/:id')
  .get(patientSignsController.getPatientSignsById)
  .put(validatePatientSigns, patientSignsController.updatePatientSigns)
  .delete(patientSignsController.deletePatientSigns);

module.exports = patientSignsRouter;
