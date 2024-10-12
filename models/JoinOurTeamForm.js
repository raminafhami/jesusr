const mongoose = require('mongoose');





//Create Schema
const JoinOurTeamFormSchema = new mongoose.Schema({
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
    required: true,
    trim: true
  },
  team: {
    type: String,
    required: true,
    trim: true
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('joinOurTeamForm', JoinOurTeamFormSchema);