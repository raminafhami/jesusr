const mongoose = require('mongoose');





//Create Schema
const ShareYourTestimonyFormSchema = new mongoose.Schema({
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
  country: {
    type: String,
    trim: true
  },
  testimony: {
    type: String,
    required: true,
    trim: true
  },
  permissionToShare: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('shareYourTestimonyForm', ShareYourTestimonyFormSchema);