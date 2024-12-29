const authRouter = require('express').Router()
const {
    registerAdmin,
    loginUser,
    registerAccountant,
    registerDoctor,
    registerNurse,
    registerPharmacist
} = require('../controllers/AuthControllers')


const { protect } = require('../middleware/AuthMiddleware')

// Login User
authRouter.post('/login', loginUser)
// Register User
authRouter.post('/register/admin', registerAdmin)
authRouter.post('/register/doctor', protect, registerDoctor)
authRouter.post('/register/pharmacist', protect, registerPharmacist)
authRouter.post('/register/nurse', protect, registerNurse)
authRouter.post('/register/accountant', protect, registerAccountant)


module.exports = authRouter
