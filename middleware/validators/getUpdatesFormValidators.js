const { check } = require('express-validator');





const createNewGetUpdatesFormValidator = [
  check('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be string'),
  check('email')
    .not().isEmpty().withMessage('Email is requierd')
    .isString().withMessage('Email must be string')
    .isEmail().withMessage('Please include a valid Email'),
  check('phoneNumber')
    .optional()
    .isString().withMessage('phoneNumber must be string'),
];





module.exports = {
  createNewGetUpdatesFormValidator
};