const express = require('express');
const employeeRouter = express.Router();

const { validateEmployeeData } = require('../../middleware/validations/employeeValidation');
const {
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  createEmployee,
  updateEmployee,
} = require('../../controllers/employee-module/employeeController');

// Route to create a new employee
employeeRouter.route('/add-employee').post(validateEmployeeData, createEmployee);

// Route to get all employees
employeeRouter.route('/all').get(getAllEmployees);

// Route to get an employee by ID, delete an employee by ID, and update an employee by ID
employeeRouter
  .route('/:employeeId')
  .get(getEmployeeById)
  .delete(deleteEmployee)
  .put(validateEmployeeData, updateEmployee);

module.exports = employeeRouter;
