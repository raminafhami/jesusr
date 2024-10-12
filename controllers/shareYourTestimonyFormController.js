const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const ShareYourTestimonyForm = require('../models/ShareYourTestimonyForm');





const createNewShareYourTestimonyForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {
    const newShareYourTestimonyForm = new ShareYourTestimonyForm({
      name: req.body.name,
      email: req.body.email,
      country: req.body.subject,
      testimony: req.body.testimony,
      permissionToShare: req.body.permissionToShare,
    });

    await newShareYourTestimonyForm.save();

    res.json(ShareYourTestimonyForm)

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewShareYourTestimonyForm
};