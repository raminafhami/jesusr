/**
 * @swagger
 * components:
 *   schemas:
 *     GetUpdatesForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the get updates form
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         phoneNumber:
 *           type: string
 *           description: The phoneNumber of the user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the get updates form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the get updates form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         phoneNumber: +44-1234567899
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewGetUpdatesFormValidator 
} = require("../middleware/validators/getUpdatesFormValidators");

const { 
  createNewGetUpdatesForm
} = require("../controllers/getUpdatesFormController");





/**
 * @swagger
 * tags:
 *   name: GetUpdatesForms
 *   description: The get updates form managing API
 * /api/getUpdatesForm:
 *   post:
 *     summary: Create a new get updates form
 *     tags: [GetUpdatesForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetUpdatesForm'
 *     responses:
 *       200:
 *         description: The created get updates form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetUpdatesForm'
 *       500:
 *         description: Something went wrong!
 *       400:
 *         description: Already submitted...!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewGetUpdatesFormValidator, createNewGetUpdatesForm);





module.exports = router;
