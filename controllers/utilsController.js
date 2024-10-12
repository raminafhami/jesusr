const asyncHandler = require("express-async-handler");





const getCurrentTime = asyncHandler(async (req, res) => {
  return res.json({
    currentTime: new Date()
  });
});





module.exports = {
  getCurrentTime
};