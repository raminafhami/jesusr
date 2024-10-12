/**
 * @swagger
 * components:
 *   schemas:
 *     PrayerRequestForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - details
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the prayer request form
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         subject:
 *           type: string
 *           description: The subject of the prayer request form
 *         details:
 *           type: string
 *           description: The details of the prayer request form
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the prayer request form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the prayer request form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         subject: Some Thing
 *         details: Some details
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewPrayerRequestFormValidator 
} = require("../middleware/validators/prayerRequestFormValidators");

const { 
  createNewPrayerRequestForm
} = require("../controllers/prayerRequestFormController");





/**
 * @swagger
 * tags:
 *   name: PrayerRequestForms
 *   description: The prayer request form managing API
 * /api/prayerRequestForm:
 *   post:
 *     summary: Create a new prayer request form
 *     tags: [PrayerRequestForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PrayerRequestForm'
 *     responses:
 *       200:
 *         description: The created prayer request form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrayerRequestForm'
 *       500:
 *         description: Something went wrong!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewPrayerRequestFormValidator, createNewPrayerRequestForm);





module.exports = router;
