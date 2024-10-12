/**
 * @swagger
 * components:
 *   schemas:
 *     JoinOurTeamForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phoneNumber
 *         - team
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the join our team form
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
 *         team:
 *           type: string
 *           description: User team
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the join our team form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the join our team form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         phoneNumber: +44-1234567899
 *         team: Usher Team
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewJoinOurTeamFormValidator 
} = require("../middleware/validators/joinOurTeamFormValidators");

const { 
  createNewJoinOurTeamForm
} = require("../controllers/joinOurTeamFormController");





/**
 * @swagger
 * tags:
 *   name: JoinOurTeamForms
 *   description: The join our team form managing API
 * /api/joinOurTeamForm:
 *   post:
 *     summary: Create a new join our team form
 *     tags: [JoinOurTeamForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JoinOurTeamForm'
 *     responses:
 *       200:
 *         description: The created join our team form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JoinOurTeamForm'
 *       500:
 *         description: Something went wrong!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewJoinOurTeamFormValidator, createNewJoinOurTeamForm);





module.exports = router;
