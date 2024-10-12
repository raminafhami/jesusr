const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const GetUpdatesForm = require('../models/GetUpdatesForm');





const createNewGetUpdatesForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {

    const existGetUpdatesFormForThisEmailAddress = await GetUpdatesForm.findOne({email: req.body.email.trim()}).lean();
    if (existGetUpdatesFormForThisEmailAddress) {
      return res.status(400).json({ errors: [{ msg: "Already submitted for this email address!" }] });
    };
    
    if (req.body.phoneNumber) {
      const existGetUpdatesFormForThisPhoneNumber = await GetUpdatesForm.findOne({phoneNumber: req.body.phoneNumber.trim()}).lean();
      if (existGetUpdatesFormForThisPhoneNumber) {
        return res.status(400).json({ errors: [{ msg: "Already submitted for this phone number!" }] });
      };
    };

    const newGetUpdatesForm = new GetUpdatesForm({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    });

    await newGetUpdatesForm.save();

    res.json(newGetUpdatesForm)

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewGetUpdatesForm
};