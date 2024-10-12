const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const {
  registerAdminValidator,
  adminLoginValidator,
  refreshNewAdminTokenValidator
} = require("../middleware/validators/adminAuthValidators");

const {
  registerAdmin,
  getAdminById,
  adminLogin,
  refreshNewAdminToken
} = require("../controllers/adminAuthController");

const adminAuth = require("../middleware/auth/adminAuth");





router
  .route("/adminPanel/registerAdmin")
  .post(throttle({ burst: 10, period: "1min" }), registerAdminValidator, registerAdmin);
router
  .route("/adminPanel/getAdminById")
  .get(throttle({ burst: 10, period: "1min" }), adminAuth, getAdminById);
router
  .route("/adminPanel/adminLogin")
  .post(throttle({ burst: 10, period: "1min" }), adminLoginValidator, adminLogin);
router
  .route("/adminPanel/refreshNewAdminToken")
  .post(throttle({ burst: 10, period: "1min" }), refreshNewAdminTokenValidator, refreshNewAdminToken);





module.exports = router;
