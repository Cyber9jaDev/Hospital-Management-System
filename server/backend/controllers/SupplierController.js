const Supplier = require('../models/SupplierModel');

// Create a new Supplier
exports.createSupplier = async (req, res) => {
    try {
        if (req.user.role !== 'Admin') {
            res.status(400)
            throw new Error('You are not authorised')
        }
        const { name, email, phone, address } = req.body
        
        if (!name || !email || !phone || !address) {
            res.status(400)
            throw new Error('Please enter all fields')
        }

        const supplierExists = await Supplier.findOne({ email })

        if (supplierExists) {
            return res.status(400).json({ msg: 'Supplier already exists'})
        }

        const uniqueCode = await getUniqueCode()

        const newSupplier = await Supplier.create({
            name,
            email,
            phone,
            address,
            uniqueCode
        });
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
};

// Get all Suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        if (req.user.role !== 'Admin') {
            res.status(400).json({
                msg: 'You are not authorised'
            })
            return
        }
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Suppliers.' })
    }
};

// Get a single Supplier by ID
exports.getSupplierById = async (req, res) => {
    try {
        if (req.user.role !== 'Admin') {
            res.status(400).json({
                msg: 'You are not authorised'
            })
            return
        }
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found.' })
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the Supplier' })
    }
};

// Update a Supplier by ID
exports.updateSupplierById = async (req, res) => {
    try {
        if (req.user.role !== 'Admin') {
            res.status(400)
            throw new Error('You are not authorised')
        }

        const { name, email, phone, address } = req.body
        
        if (!name || !email || !phone || !address) {
            res.status(400)
            throw new Error('Please enter all fields')
        }
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            res.status(404)
            throw new Error('Supplier not found')
        }
        supplier.name = name
        supplier.phone = phone
        supplier.address = address

        await supplier.save()
        res.status(200).json(supplier)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
};

// Delete a Supplier by ID
exports.deleteSupplierById = async (req, res) => {
    try {
        if (req.user.role !== 'Admin') {
            throw new Error('You are not authorised')
        }
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            res.status(404)
            throw new Error('Supplier not found')
        }
        await Supplier.deleteOne({ _id: req.params.id });
        res.json({ message: 'Supplier deleted successfully.' })
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}


// getting unique code
const generateAlphanumericString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let alphanumericString = '';
  
    for (let i = 0; i < 6; i++) {
      alphanumericString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return alphanumericString;
  }
  
  const getUniqueCode = async () => {
    let uniqueCode = generateAlphanumericString();
  
    const codeExists = await Supplier.findOne({ uniqueCode });
  
    if (codeExists) {
      return getUniqueCode(); // Recursive call to generate a new unique code
    }
  
    return uniqueCode;
  }