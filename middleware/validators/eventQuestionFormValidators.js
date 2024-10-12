const { check } = require('express-validator');





const createNewEventQuestionFormValidator = [
  check('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be string'),
  check('email')
    .not().isEmpty().withMessage('Email is requierd')
    .isString().withMessage('Email must be string')
    .isEmail().withMessage('Please include a valid Email'),
  check('phoneNumber')
    .not().isEmpty().withMessage('phoneNumber is requierd')
    .isString().withMessage('phoneNumber must be string'),
  check('questions')
    .optional()
    .isString().withMessage('questions must be string'),
];





module.exports = {
  createNewEventQuestionFormValidator
};