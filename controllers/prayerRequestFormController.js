const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const PrayerRequestForm = require('../models/PrayerRequestForm');





const createNewPrayerRequestForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {
    const newPrayerRequestForm = new PrayerRequestForm({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      details: req.body.details
    });

    await newPrayerRequestForm.save();

    res.json(newPrayerRequestForm)

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewPrayerRequestForm
};