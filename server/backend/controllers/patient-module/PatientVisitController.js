const PatientVisit = require('../../models/patient-module/PatientVisitModel');

// Create new patient visit
exports.createPatientVisit = async (req, res) => {
  try {
    const patientVisit = await PatientVisit.create(req.body);
    res.status(201).json(patientVisit);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create patient visit' });
  }
};

// Get all patient visits
exports.getAllPatientVisits = async (req, res) => {
  try {
    const visits = await PatientVisit.find();
    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch patient visits' });
  }
};

// Get patient visit by ID
exports.getPatientVisitById = async (req, res) => {
  try {
    const visit = await PatientVisit.findById(req.params.id);
    if (!visit) {
      return res.status(404).json({ error: 'Patient visit not found' });
    }
    res.json(visit);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch patient visit' });
  }
};

// Update patient visit by ID
exports.updatePatientVisit = async (req, res) => {
  try {
    const visit = await PatientVisit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!visit) {
      return res.status(404).json({ error: 'Patient visit not found' });
    }
    res.json(visit);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update patient visit' });
  }
};

// Delete patient visit by ID
exports.deletePatientVisit = async (req, res) => {
  try {
    const visit = await PatientVisit.findByIdAndRemove(req.params.id);
    if (!visit) {
      return res.status(404).json({ error: 'Patient visit not found' });
    }
    res.json({ message: 'Patient visit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete patient visit' });
  }
};
