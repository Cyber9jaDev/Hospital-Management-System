const express = require('express');
const doctorRemarksRouter = express.Router();
const doctorsRemarkController = require('../../controllers/patient-module/DoctorRemarksController');
const {validateDoctorsRemark} = require('../../middleware/validations/patientValidation')

doctorRemarksRouter.route('/remarks')
  .post(validateDoctorsRemark, doctorsRemarkController.createDoctorsRemark)
  .get(doctorsRemarkController.getAllDoctorsRemarks);

doctorRemarksRouter.route('/remarks/:id')
  .get(doctorsRemarkController.getDoctorsRemarkById)
  .put(validateDoctorsRemark, doctorsRemarkController.updateDoctorsRemark)
  .delete(doctorsRemarkController.deleteDoctorsRemark);

module.exports = doctorRemarksRouter;
