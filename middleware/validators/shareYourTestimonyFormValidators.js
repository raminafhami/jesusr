const { check } = require('express-validator');





const createNewShareYourTestimonyFormValidator = [
  check('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be string'),
  check('email')
    .not().isEmpty().withMessage('Email is requierd')
    .isString().withMessage('Email must be string')
    .isEmail().withMessage('Please include a valid Email'),
  check('country')
    .optional()
    .isString().withMessage('country must be string'),
  check('testimony')
    .not().isEmpty().withMessage('testimony is requierd')
    .isString().withMessage('testimony must be string')
    .isLength({ max:200 }),
  check('permissionToShare')
    .not().isEmpty().withMessage('permissionToShare is requierd')
    .isBoolean().withMessage('permissionToShare must be boolean'),
];





module.exports = {
  createNewShareYourTestimonyFormValidator
};