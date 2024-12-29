const PatientSigns = require('../../models/patient-module/PatientSignsModel');

// Create new patient signs
exports.createPatientSigns = async (req, res) => {
  try {
    const patientSigns = await PatientSigns.create(req.body);
    res.status(201).json(patientSigns);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create patient signs' });
  }
};

// Get all patient signs
exports.getAllPatientSigns = async (req, res) => {
  try {
    const signs = await PatientSigns.find();
    res.json(signs);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch patient signs' });
  }
};

// Get patient signs by ID
exports.getPatientSignsById = async (req, res) => {
  try {
    const signs = await PatientSigns.findById(req.params.id);
    if (!signs) {
      return res.status(404).json({ error: 'Patient signs not found' });
    }
    res.json(signs);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch patient signs' });
  }
};

// Update patient signs by ID
exports.updatePatientSigns = async (req, res) => {
  try {
    const signs = await PatientSigns.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!signs) {
      return res.status(404).json({ error: 'Patient signs not found' });
    }
    res.json(signs);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update patient signs' });
  }
};

// Delete patient signs by ID
exports.deletePatientSigns = async (req, res) => {
  try {
    const signs = await PatientSigns.findByIdAndRemove(req.params.id);
    if (!signs) {
      return res.status(404).json({ error: 'Patient signs not found' });
    }
    res.json({ message: 'Patient signs deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete patient signs' });
  }
};
