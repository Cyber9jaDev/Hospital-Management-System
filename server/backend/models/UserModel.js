const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        required: true,
        enums: ['Admin', 'Nurse', 'Pharmacist', 'Doctor', 'Accountant']
    }
})

const User = mongoose.model('User', userSchema)

const adminSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    othername:{
        type:String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Admin = mongoose.model('Admin', adminSchema)

const doctorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    othername:{
        type:String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Doctor = mongoose.model('Doctor', doctorSchema)

const pharmacistSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    othername:{
        type:String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Pharmacist = mongoose.model('Pharmacist', pharmacistSchema)

const nurseSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    othername:{
        type:String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Nurse = mongoose.model('Nurse', nurseSchema)

const accountantSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Accountant = mongoose.model('Accountant', accountantSchema)

module.exports = {
    User,
    Accountant,
    Admin,
    Doctor,
    Pharmacist,
    Nurse
}
