const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require("../models/Admin");
const AdminRefreshToken = require("../models/AdminRefreshToken");





//@route    POST api/adminAuth/adminPanel/registerAdmin
//@desc     register Admin
//@admin-panel
//@access   Public
const registerAdmin = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  const { name, email, password } = req.body;
  try {

    //See if admin exist
    const existAdmin = await Admin.findOne({});

    if (existAdmin) {
      return res.status(404).json({ errors: [{ msg: "Not found!" }] });
    };

    //Create new admin
    const admin = new Admin({
      name,
      email,
      password,
    });

    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);
    await admin.save();

    //Return jsonwebtoken
    const payload = {
      admin: {
        id: admin.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_ADMIN_PANEL, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH_ADMIN_PANEL, {
      expiresIn: "180d",
    });

    await AdminRefreshToken.deleteMany();

    await AdminRefreshToken({
      token: refreshToken,
      admin: admin,
    }).save();

    return res.json({ token, refreshToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});



//@route    GET api/adminAuth/adminPanel/getAdminById
//@desc     Get Admin by Id
//@admin-panel
//@access   private
const getAdminById = asyncHandler(async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});



//@route    POST api/adminAuth/adminPanel/adminLogin
//@desc     adminLogin
//@admin-panel
//@access   Public
const adminLogin = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };
  
  const { email, password } = req.body;
  try {
    //See if admin doesn't exist
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ errors: [{ msg: "Not found!" }] });
    };

    //Compare plain password with hash password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Not found!" }] });
    }

    //Return jsonwebtoken
    const payload = {
      admin: {
        id: admin.id
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_ADMIN_PANEL, { expiresIn: '30m' });

    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH_ADMIN_PANEL, {
      expiresIn: "180d",
    });

    await AdminRefreshToken.deleteMany();

    await AdminRefreshToken({
      token: refreshToken,
      admin: admin,
    }).save();

    return res.json({ token, refreshToken });
  } catch (err) {
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});



//@route    POST api/adminAuth/adminPanel/refreshNewAdminToken
//@desc     refresh New AdminToken
//@admin-panel
//@access   private
const refreshNewAdminToken = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  const { refreshToken, id } = req.body;
  try {
    const admin = await Admin.findById(id).select("-password");

    if (!admin) {
      return res.status(400).json({ errors: [{ msg: "Not found!" }] });
    }

    const adminRefreshToken = await AdminRefreshToken.findOne({
      token: refreshToken,
    });
    if (!adminRefreshToken) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Not found!" }] });
    }

    if (adminRefreshToken.admin != admin.id) {
      return res.status(400).json({ errors: [{ msg: "Not found!" }] });
    }

    jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH_ADMIN_PANEL);
    const payload = {
      admin: {
        id: admin.id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_ADMIN_PANEL, {
      expiresIn: '30m',
    });

    const newRefreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH_ADMIN_PANEL, {
      expiresIn: "180d",
    });
    await AdminRefreshToken.updateOne(
      { token: refreshToken },
      { token: newRefreshToken }
    );
    return res.json({ token, refreshToken: newRefreshToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});






module.exports = {
  registerAdmin,
  getAdminById,
  adminLogin,
  refreshNewAdminToken
};
