/**
 * @swagger
 * components:
 *   schemas:
 *     InvitingPastorForm:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phoneNumber
 *         - founder
 *         - churchName
 *         - extender
 *         - expectedAttendance
 *         - eventDate
 *         - messageThemeOrScriptureFocus
 *         - financialResponsibilityForTheTravelArrangements
 *         - financialResponsibilityForTheAccommodation
 *         - transportUponArrivalAndDeparture
 *         - durationOfWorship
 *         - speakingTime
 *         - alterCallTime
 *         - translatorBeProvided
 *         - catchersOrMinistrySupport
 *         - churchOpenToTheManifestation
 *         - livestream
 *         - allowedToFilm
 *         - whereDoYouTypicallyShareYourLivestreams
 *         - airConditioning
 *         - placeForRetreatForAWhile
 *         - toiletsNearby
 *         - private
 *         - thePredominantlyReligiousBeliefOfTheArea         
 *         - offeringDetails
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
 *         founder:
 *           type: string
 *           description: Founder / Lead Pastor
 *         churchName:
 *           type: string
 *           description: Church Name
 *         churchWebsite:
 *           type: string
 *           description: Church/Ministry Website
 *         faceBook:
 *           type: string
 *           description: Facebook Page
 *         extender:
 *           type: string
 *           description: Who Is Extending the Invitation
 *         numberOfConnectedChurches:
 *           type: number
 *           description: Number of Connected Churches
 *         expectedAttendance:
 *           type: number
 *           description: Expected Attendance
 *         numberOfLeadersAndPastorsAttending:
 *           type: number
 *           description: Number of Leaders and Pastors Attending
 *         eventDate:
 *           type: string
 *           description: Event Date
 *         messageThemeOrScriptureFocus:
 *           type: string
 *           description: Message Theme or Scripture Focus
 *         AdditionalResponsibilities:
 *           type: string
 *           description: Additional Roles/Responsibilities
 *         financialResponsibilityForTheTravelArrangements:
 *           type: string
 *           description: Do you take financial responsibility for the travel arrangements? If yes, please add  details (e.g., flight, ticketing, class).
 *         financialResponsibilityForTheAccommodation:
 *           type: string
 *           description: Do you take financial responsibility for accommodation? If yes, please add details  (e.g., type of accommodation, location, how far from venue)
 *         transportUponArrivalAndDeparture:
 *           type: string
 *           description: Will there be transport upon arrival and departure?
 *         durationOfWorship:
 *           type: string
 *           description: Duration of Worship
 *         speakingTime:
 *           type: string
 *           description: Speaking Time
 *         alterCallTime:
 *           type: string
 *           description: Altar Call Time
 *         translatorBeProvided:
 *           type: boolean
 *           description: Will a translator be provided?
 *         language:
 *           type: string
 *           description: If yes, what language?
 *         catchersOrMinistrySupport:
 *           type: boolean
 *           description: Will there be catchers or ministry support during prayer time?
 *         churchOpenToTheManifestation:
 *           type: boolean
 *           description: Is your church open to the manifestation of the Holy Spirit, including deliverance and  healing?
 *         livestream:
 *           type: boolean
 *           description: Do you livestream, take photos, or film the service?
 *         allowedToFilm:
 *           type: boolean
 *           description: If no, are we allowed to film or take photos?
 *         whereDoYouTypicallyShareYourLivestreams:
 *           type: string
 *           description: Where do you typically share your livestreams, photos, or recordings of the service?
 *         airConditioning:
 *           type: boolean
 *           description: In warm climates, does the church have air conditioning?
 *         placeForRetreatForAWhile:
 *           type: boolean
 *           description: Is there a place where they can retreat for a while (e.g., Greenroom)?
 *         toiletsNearby:
 *           type: boolean
 *           description: Are toilets nearby?
 *         private:
 *           type: boolean
 *           description: Is it private?
 *         thePredominantlyReligiousBeliefOfTheArea:
 *           type: string
 *           description: Is the area predominantly Muslim, witchcraft-influenced, or Christian?
 *         offeringDetails:
 *           type: string
 *           description: Will there be an offering collected, or do you have a fixed honorarium? Please  specify and provide details.
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The auto-generated createdAt of the inviting pastor form
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The auto-generated updatedAt of the inviting pastor form
 *       example:
 *         name: Ramin Afhami
 *         email: afhami.ramin@yahoo.com
 *         phoneNumber: +44-1234567899
 *         founder: Someone
 *         churchName: Some name
 *         churchWebsite: SomeThing
 *         faceBook: Somthing
 *         extender: Senior Pastor
 *         numberOfConnectedChurches: 10
 *         expectedAttendance: 9
 *         numberOfLeadersAndPastorsAttending: 11
 *         eventDate: 2024-08-19
 *         messageThemeOrScriptureFocus: Something
 *         AdditionalResponsibilities: Something
 *         financialResponsibilityForTheTravelArrangements: Something
 *         financialResponsibilityForTheAccommodation: Something
 *         transportUponArrivalAndDeparture: Something
 *         durationOfWorship: Something
 *         speakingTime: Something
 *         alterCallTime: Something
 *         translatorBeProvided: false
 *         language: Something
 *         catchersOrMinistrySupport: false
 *         churchOpenToTheManifestation: false
 *         livestream: false
 *         allowedToFilm: false
 *         whereDoYouTypicallyShareYourLivestreams: Something
 *         airConditioning: false
 *         placeForRetreatForAWhile: false
 *         toiletsNearby: false
 *         private: false
 *         thePredominantlyReligiousBeliefOfTheArea: SomeThing
 *         offeringDetails: SomeThing
 */






const express = require("express");
const router = express.Router();
const throttle = require("express-throttle");

const { 
  createNewInvitingPastorFormValidator 
} = require("../middleware/validators/invitingPastorFormValidators");

const { 
  createNewInvitingPastorForm
} = require("../controllers/invitingPastorFormController");





/**
 * @swagger
 * tags:
 *   name: InvitingPastorForms
 *   description: The inviting pastor form managing API
 * /api/invitingPastorForm:
 *   post:
 *     summary: Create a new inviting pastor form
 *     tags: [InvitingPastorForms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InvitingPastorForm'
 *     responses:
 *       200:
 *         description: The created inviting pastor form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvitingPastorForm'
 *       500:
 *         description: Something went wrong!
 *
 */
router
  .route("/")
  .post(throttle({ burst: 10, period: "1min" }), createNewInvitingPastorFormValidator, createNewInvitingPastorForm);





module.exports = router;
