const mongoose = require('mongoose');





//Create Schema
const PrayerRequestFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  details: {
    type: String,
    required: true,
    trim: true
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('prayerRequestForm', PrayerRequestFormSchema);