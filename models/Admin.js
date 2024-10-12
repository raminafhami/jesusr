const mongoose = require('mongoose');





//Create Schema
const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String
  }
},
{
  timestamps: true
});





module.exports = Admin = mongoose.model('admin', AdminSchema);