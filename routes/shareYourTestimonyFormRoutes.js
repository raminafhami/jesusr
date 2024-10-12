/**
 * @swagger
 * components:
 *   schemas:
 *     ShareYourTestimonyForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - testimony
 *         - permissionToShare
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the share your testimony form
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         country:
 *           type: string
 *           description: The country of the share your testimony form
 *         testimony:
 *           type: string
 *           description: The testimony of the share your testimony form
 *         permissionToShare:
 *           type: string
 *           description: The permissin to share of the share your testimony form
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the share your testimony form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the share your testimony form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         country: Nederland
 *         testimony: Some details
 *         permissionToShare: true
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewShareYourTestimonyFormValidator 
} = require("../middleware/validators/shareYourTestimonyFormValidators");

const { 
  createNewShareYourTestimonyForm
} = require("../controllers/shareYourTestimonyFormController");





/**
 * @swagger
 * tags:
 *   name: ShareYourTestimonyForms
 *   description: The prayer request form managing API
 * /api/shareYourTestimonyForm:
 *   post:
 *     summary: Create a new prayer request form
 *     tags: [ShareYourTestimonyForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShareYourTestimonyForm'
 *     responses:
 *       200:
 *         description: The created share your testimony form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShareYourTestimonyForm'
 *       500:
 *         description: Something went wrong!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewShareYourTestimonyFormValidator, createNewShareYourTestimonyForm);





module.exports = router;
