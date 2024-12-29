const express = require('express');
const supplierRouter = express.Router();
const supplierController = require('../controllers/SupplierController');


const { protect } = require('../middleware/AuthMiddleware')

// API endpoints for inventory supplier
supplierRouter.post('/create', protect, supplierController.createSupplier);
supplierRouter.get('/', protect, supplierController.getAllSuppliers);
supplierRouter.get('/:id', protect, supplierController.getSupplierById);
supplierRouter.put('/:id', protect, supplierController.updateSupplierById);
supplierRouter.delete('/:id', protect, supplierController.deleteSupplierById);

module.exports = supplierRouter;