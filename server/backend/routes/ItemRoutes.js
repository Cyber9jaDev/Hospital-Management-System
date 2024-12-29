const itemRouter = require('express').Router();

const itemController = require('../controllers/ItemController');

const { protect } = require('../middleware/AuthMiddleware')

// API endpoints for inventory item management
itemRouter.post('/create', protect, itemController.createItem);
itemRouter.get('/', protect, itemController.getAllItems);
itemRouter.get('/:id', protect, itemController.getItemById);
itemRouter.put('/:id', protect, itemController.updateItemById);
itemRouter.delete('/:id', protect, itemController.deleteItemById);

module.exports = itemRouter;
