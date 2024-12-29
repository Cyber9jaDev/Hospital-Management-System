const mongoose =  require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        trim: true
     },  
    address: { 
        type: String,
        trim: true
    },
    email: { 
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    phone: { 
        type: String,
        required: true,
        trim: true
    },    
    uniqueCode: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

const Supplier = mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;