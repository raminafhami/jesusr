const mongoose = require('mongoose');





//Create Schema
const EventQuestionFormSchema = new mongoose.Schema({
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
  questions: {
    type: String,
    trim: true
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('eventQuestionFormSchema', EventQuestionFormSchema);