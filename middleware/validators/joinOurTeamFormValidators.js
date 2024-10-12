const { check } = require('express-validator');





const createNewJoinOurTeamFormValidator = [
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
  check('team')
    .not().isEmpty().withMessage('team is requierd')
    .isString().withMessage('team must be string'),
];





module.exports = {
  createNewJoinOurTeamFormValidator
};