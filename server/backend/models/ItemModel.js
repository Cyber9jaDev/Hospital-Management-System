const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  expirationDate: {
    type: Date,
    validate: { validator: futureDateValidator }
  },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  currentStock: {
    type: Number,
    default: 0,
    min: 0
  },
  minimumThreshold: {
    type: Number,
    default: 10,
    min: 0
  }
}, {
  timestamps: true
});

// Custom validator for checking if the date is in the future
function futureDateValidator(value) {
  return value === null || value >= Date.now();
}

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

module.exports = Item;
