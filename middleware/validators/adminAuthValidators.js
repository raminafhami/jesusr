const { check } = require('express-validator');





const registerAdminValidator = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').not().isEmpty().withMessage('Email is requierd'),
  check('email').isEmail().withMessage('Please include a valid Email'),
  check('password').not().isEmpty().withMessage('Password is requierd').isLength({ min: 6 }).withMessage('Please enter a password with 6 or more characters')
];



const adminLoginValidator = [
  check('email').not().isEmpty().withMessage('Email is requierd').isEmail().withMessage('Please include a valid Email'),
  check('password').exists().withMessage('Password is required')
];



const refreshNewAdminTokenValidator = [
  check('refreshToken').not().isEmpty().withMessage('RefreshToken is requierd'),
  check('id').exists().withMessage('Id is required')
];





module.exports = {
  registerAdminValidator,
  adminLoginValidator,
  refreshNewAdminTokenValidator
};