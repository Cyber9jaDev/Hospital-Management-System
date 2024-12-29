const Item = require('../models/ItemModel');
const Supplier = require('../models/SupplierModel')

// Create a new item
exports.createItem = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorised')
  }
    const { name, quantity, price, expirationDate, supplierId } = req.body

    if (!name || !quantity || !price || !expirationDate || !supplierId) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      })
    }

    const supplier = await Supplier.findOne({ uniqueCode: supplierId })
    
    if (!supplier) {
      return res.status(400).json({msg: 'No supplier with such ID exist'})
    }

    const item = await Item.findOne({ name })

    if (item) {
      return res.status(400).json({msg: `Item already exists and has a quantity of ${item.quantity}`})
    }
    const newItem = await Item.create({
      name,
      quantity,
      price,
      expirationDate,
      currentStock: quantity,
      supplierId: supplier._id,
      creator: req.user.id
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorised')
  }
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items.' });
  }
};

// Get a single item by ID
exports.getItemById = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorised')
  }
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the item.' });
  }
};

// Update an item by ID
exports.updateItemById = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorised')
    }
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the item.' });
  }
};

// Delete an item by ID
exports.deleteItemById = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorised')
    }
    
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.json({ message: 'Item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the item.' });
  }
};

