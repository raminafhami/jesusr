const { check } = require('express-validator');





const createNewPrayerRequestFormValidator = [
  check('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be string'),
  check('email')
    .not().isEmpty().withMessage('Email is requierd')
    .isString().withMessage('Email must be string')
    .isEmail().withMessage('Please include a valid Email'),
  check('subject')
    .optional()
    .isString().withMessage('subject must be string'),
  check('details')
    .not().isEmpty().withMessage('details is requierd')
    .isString().withMessage('details must be string'),
];





module.exports = {
  createNewPrayerRequestFormValidator
};