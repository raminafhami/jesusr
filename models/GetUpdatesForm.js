const mongoose = require('mongoose');





//Create Schema
const GetUpdatesFormSchema = new mongoose.Schema({
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
  phoneNumber: {
    type: String,
    trim: true
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('getUpdatesForm', GetUpdatesFormSchema);