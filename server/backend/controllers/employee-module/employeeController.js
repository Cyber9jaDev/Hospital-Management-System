// Import the errorHandler middleware to handle errors in this module
const { errorHandler } = require('../../middleware/erroHandler');

// Import the Employee model to perform database operations related to employees
const Employee = require('../../models/employee-module/employeeModel');

// Route handler to create a new employee
const createEmployee = async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await Employee.create(employeeData);
    res.status(201).json(newEmployee);
  } catch (error) {
    // If an error occurs, pass it to the errorHandler middleware for standardized error handling
    errorHandler(error, req, res);
  }
};

// Route handler to update an existing employee
const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employeeData = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, employeeData, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (error) {
    // If an error occurs, pass it to the errorHandler middleware for standardized error handling
    errorHandler(error, req, res);
  }
};

// Route handler to get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    // If an error occurs, pass it to the errorHandler middleware for standardized error handling
    errorHandler(error, req, res);
  }
};

// Route handler to get an employee by their ID
const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    // If an error occurs, pass it to the errorHandler middleware for standardized error handling
    errorHandler(error, req, res);
  }
};

// Route handler to delete an employee by their ID
const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(204).end();
  } catch (error) {
    // If an error occurs, pass it to the errorHandler middleware for standardized error handling
    errorHandler(error, req, res);
  }
};

// Export all the route handlers
module.exports = {
  createEmployee,
  updateEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
};
