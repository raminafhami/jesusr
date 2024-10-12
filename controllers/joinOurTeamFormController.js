const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const JoinOurTeamForm = require('../models/JoinOurTeamForm');





const createNewJoinOurTeamForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {
    const newJoinOurTeamForm = new JoinOurTeamForm({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      team: req.body.team
    });

    await newJoinOurTeamForm.save();

    res.json(newJoinOurTeamForm)

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewJoinOurTeamForm
};