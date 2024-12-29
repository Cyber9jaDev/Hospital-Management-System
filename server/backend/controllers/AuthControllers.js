const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Admin, Doctor, Nurse ,Pharmacist ,Accountant, User} = require('../models/UserModel')


// @desc Register Admin
// @route /api/v1/auth/register/admin
// @access Public
const registerAdmin = asyncHandler(async (req, res) => {
  try {
    // if (req.user.role !== 'Admin') {
    //   res.status(400)
    //   throw new Error('You are not authorized')
    // }
      // destructure the req body
      const { firstname, lastname, othername, email, password, role } = req.body
      
    // ensure that required fields have been supplied
      if (!firstname || !lastname || !email ||!password || !role){
        res.status(400)
        throw new Error('Please enter all fields')
        }
      
    // Role has to be admin
      if (role !== 'Admin') {
        res.status(400)
        throw new Error('Please specify role to be Admin')
    }
    
    // check if a user with same email exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error('User with such email exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // store admin details in admin database
    const admin = await Admin.create({
      userId: newUser._id,
      firstname,
      lastname,
      othername
    })

    res.status(201).json({
      message: `An account has been created for ${firstname} ${lastname}`,
    })
    
    }catch(error){
        // 400 - Bad Request
        res.status(400).json({
            message: `An unexpected error occurred. Please try again later => ${error}`
        })
    }
})


// @desc Register Doctor
// @route /api/v1/auth/register/doctor
// @access Private
const registerDoctor = asyncHandler(async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorized')
    }
      // destructure the req body
      const { firstname, lastname, othername, email, password, role } = req.body
      
    // ensure that required fields have been supplied
      if (!firstname || !lastname || !email ||!password || !role){
        res.status(400)
        throw new Error('Please enter all fields')
        }
      
    // Role has to be doctor
      if (role !== 'Doctor') {
        res.status(400)
        throw new Error('Please specify role to be Doctor')
    }
    
    // check if a user with same email exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error('User with such email exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // store doctor details in doctor database
    const doctor = await Doctor.create({
      userId: newUser._id,
      firstname,
      lastname,
      othername
    })

    res.status(201).json({
      message: `An account has been created for ${firstname} ${lastname}`,
    })
    
    }catch(error){
        // 400 - Bad Request
        res.status(400).json({
            message: `An unexpected error occurred. Please try again later => ${error}`
        })
    }
})

// @desc Register Nurse
// @route /api/v1/auth/register/nurse
// @access Private
const registerNurse = asyncHandler(async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorized')
    }
      // destructure the req body
      const { firstname, lastname, othername, email, password, role } = req.body
      
    // ensure that required fields have been supplied
      if (!firstname || !lastname || !email ||!password || !role){
        res.status(400)
        throw new Error('Please enter all fields')
        }
      
    // Role has to be doctor nurse
      if (role !== 'Nurse') {
        res.status(400)
        throw new Error('Please specify role to be Nurse')
    }
    
    // check if a user with same email exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error('User with such email exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // store nurse details in nurse database
    const nurse = await Nurse.create({
      userId: newUser._id,
      firstname,
      lastname,
      othername
    })

    res.status(201).json({
      message: `An account has been created for ${firstname} ${lastname}`,
    })
    
    }catch(error){
        // 400 - Bad Request
        res.status(400).json({
            message: `An unexpected error occurred. Please try again later => ${error}`
        })
    }
})

// @desc Register Pharmacist
// @route /api/v1/auth/register/pharmacist
// @access Private
const registerPharmacist = asyncHandler(async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorized')
    }
      // destructure the req body
      const { firstname, lastname, othername, email, password, role } = req.body
      
    // ensure that required fields have been supplied
      if (!firstname || !lastname || !email ||!password || !role){
        res.status(400)
        throw new Error('Please enter all fields')
        }
      
    // Role has to be Pharmacist
      if (role !== 'Pharmacist') {
        res.status(400)
        throw new Error('Please specify role to be Pharmacist')
    }
    
    // check if a user with same email exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error('User with such email exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // store pharmacist details in pharmacist database
    const pharmacist = await Pharmacist.create({
      userId: newUser._id,
      firstname,
      lastname,
      othername
    })

    res.status(201).json({
      message: `An account has been created for ${firstname} ${lastname}`,
    })
    
    }catch(error){
        // 400 - Bad Request
        res.status(400).json({
            message: `An unexpected error occurred. Please try again later => ${error}`
        })
    }
})

// @desc Register Accountant
// @route /api/v1/auth/register/accountant
// @access Private
const registerAccountant = asyncHandler(async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorized')
    }
      // destructure the req body
      const { firstname, lastname, othername, email, password, role } = req.body
      
    // ensure that required fields have been supplied
      if (!firstname || !lastname || !email ||!password || !role){
        res.status(400)
        throw new Error('Please enter all fields')
        }
      
    // Role has to be Accountant
      if (role !== 'Accountant') {
        res.status(400)
        throw new Error('Please specify role to be Accountant')
    }
    
    // check if a user with same email exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error('User with such email exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // store accountant details in accountant database
    const accountant = await Accountant.create({
      userId: newUser._id,
      firstname,
      lastname,
      othername
    })

    res.status(201).json({
      message: `An account has been created for ${firstname} ${lastname}`,
    })
    
    }catch(error){
        // 400 - Bad Request
        res.status(400).json({
            message: `An unexpected error occurred. Please try again later => ${error}`
        })
    }
})


// @desc Login User
// @route /api/v1/auth/register
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body
    
    if (!email || !password) {
      res.status(400)
      throw new Error('Please enter all fields')
    }
        User.findOne({ email }).then((user) => {
          if (!user) {
            // 401 - Invalid credentials
            res.status(401).json({
              success: false,
              message: 'User does not exist'
            })
            return
          } else if (user) {
            // Match Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                res.status(400).json({
                  success: false,
                  message: 'An error occured while logging in. Try again'
                })
              }
              if (isMatch) {
                // 200 - Successful login
                res.status(200).json({
                  success: true,
                  message: 'Successful Login',
                  token: generateToken(user._id)
                })
                }
              else {
                // 401 - Invalid credentials
                res.status(401).json({
                  success: false,
                  message: 'Invalid Credentials'
                })
              }
            });
          }
        });
      } catch (error) {
        //400 - Bad Request
        res.status(400).json({
          message: `An unexpected error occurred. Please try again later => ${error}`,
        });
      }
})



const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
  })
}

module.exports = {
    registerAdmin,
    loginUser,
    registerNurse,
    registerDoctor,
    registerPharmacist,
    registerAccountant,
}
