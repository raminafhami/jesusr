const jwt = require('jsonwebtoken');






module.exports = function (req, res, next) {
  //Get Token from header
  const token = req.header("adminToken");

  //check if not token
  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ msg: "عدم دسترسی!"}] });
  };

  //Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN_PANEL);
    if (!decoded.admin) return res.status(401).json({ errors: [{ msg: "عدم دسترسی!"}] });
    req.admin = decoded.admin;
    next();
  } catch (err) {
    res.status(401).json({ errors: [{ msg: "عدم دسترسی!"}] });
  };
};
