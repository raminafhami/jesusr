const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const EventQuestionForm = require('../models/EventQuestionForm');





const createNewEventQuestionForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {
    const newEventQuestionForm = new EventQuestionForm({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      questions: req.body.questions
    });

    await newEventQuestionForm.save();

    res.json(newEventQuestionForm)

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewEventQuestionForm
};