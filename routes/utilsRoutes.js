const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");
const { 
  getCurrentTime 
} = require("../controllers/utilsController");





/**
 * @swagger
 * /api/utils/getCurrentTime:
 *   get:
 *     summary: Returns current date
 *     responses:
 *       200:
 *         description: current date
 */
router
  .route("/getCurrentTime")
  .get(throttle({ burst: 40, period: "1min" }), getCurrentTime);





module.exports = router;
