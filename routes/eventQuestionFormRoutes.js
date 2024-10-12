/**
 * @swagger
 * components:
 *   schemas:
 *     EventQuestionForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phoneNumber
 *         - questions
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the event question form
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
 *         questions:
 *           type: string
 *           description: User questions
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the event question form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the event question form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         phoneNumber: +44-1234567899
 *         questions: Some questions
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewEventQuestionFormValidator 
} = require("../middleware/validators/eventQuestionFormValidators");

const { 
  createNewEventQuestionForm 
} = require("../controllers/eventQuestionFormController");





/**
 * @swagger
 * tags:
 *   name: EventQuestionForms
 *   description: The event question form managing API
 * /api/eventQuestionForm:
 *   post:
 *     summary: Create a new event question form
 *     tags: [EventQuestionForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventQuestionForm'
 *     responses:
 *       200:
 *         description: The created event question form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventQuestionForm'
 *       500:
 *         description: Something went wrong!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewEventQuestionFormValidator, createNewEventQuestionForm);





module.exports = router;
