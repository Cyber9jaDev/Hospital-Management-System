const DoctorsRemark = require('../../models/patient-module/DoctorRemarksModel');

// Create a new doctor's remark
exports.createDoctorsRemark = async (req, res) => {
  try {
    const doctorsRemark = await DoctorsRemark.create(req.body);
    res.status(201).json(doctorsRemark);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create doctor\'s remark' });
  }
};

// Get all doctor's remarks
exports.getAllDoctorsRemarks = async (req, res) => {
  try {
    const remarks = await DoctorsRemark.find();
    res.json(remarks);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch doctor\'s remarks' });
  }
};

// Get a single doctor's remark by ID
exports.getDoctorsRemarkById = async (req, res) => {
  try {
    const remark = await DoctorsRemark.findById(req.params.id);
    if (!remark) {
      return res.status(404).json({ error: 'Doctor\'s remark not found' });
    }
    res.json(remark);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch doctor\'s remark' });
  }
};

// Update a doctor's remark by ID
exports.updateDoctorsRemark = async (req, res) => {
  try {
    const remark = await DoctorsRemark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!remark) {
      return res.status(404).json({ error: 'Doctor\'s remark not found' });
    }
    res.json(remark);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update doctor\'s remark' });
  }
};

// Delete a doctor's remark by ID
exports.deleteDoctorsRemark = async (req, res) => {
  try {
    const remark = await DoctorsRemark.findByIdAndRemove(req.params.id);
    if (!remark) {
      return res.status(404).json({ error: 'Doctor\'s remark not found' });
    }
    res.json({ message: 'Doctor\'s remark deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete doctor\'s remark' });
  }
};
