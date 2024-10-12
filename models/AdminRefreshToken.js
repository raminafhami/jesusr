const mongoose = require("mongoose");





//Create Schema
const AdminRefreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
    required: true
  }
},
{
  timestamps: true
});



AdminRefreshTokenSchema.index(
  { updatedAt: 1 },
  { expireAfterSeconds: 7 * 24 * 60 * 60 }
);





module.exports = Admin = mongoose.model("adminRefreshToekn", AdminRefreshTokenSchema);

