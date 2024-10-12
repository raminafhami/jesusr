const mongoose = require('mongoose');





//Create Schema
const InvitingPastorFormFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  founder: {
    type: String,
    required: true,
    trim: true
  },
  churchName: {
    type: String,
    required: true,
    trim: true
  },
  churchWebsite: {
    type: String,
    trim: true
  },
  faceBook: {
    type: String,
    trim: true
  },
  extender: {
    type: String,
    required: true,
    trim: true
  },
  numberOfConnectedChurches: {
    type: Number,
    trim: true
  },
  expectedAttendance: {
    type: Number,
    required: true,
    trim: true
  },
  numberOfLeadersAndPastorsAttending: {
    type: Number,
    trim: true
  },
  eventDate: {
    type: Date,
    required: true,
    trim: true
  },
  messageThemeOrScriptureFocus: {
    type: String,
    required: true,
    trim: true
  },
  AdditionalResponsibilities: {
    type: String,
    trim: true
  },
  financialResponsibilityForTheTravelArrangements: {
    type: String,
    required: true,
    trim: true
  },
  financialResponsibilityForTheAccommodation: {
    type: String,
    required: true,
    trim: true
  },
  transportUponArrivalAndDeparture: {
    type: String,
    required: true,
    trim: true
  },
  durationOfWorship: {
    type: String,
    required: true,
    trim: true
  },
  speakingTime: {
    type: String,
    required: true,
    trim: true
  },
  alterCallTime: {
    type: String,
    required: true,
    trim: true
  },
  translatorBeProvided: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  language: {
    type: String,
    trim: true
  },
  catchersOrMinistrySupport: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  churchOpenToTheManifestation: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  livestream: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  allowedToFilm: {
    type: Boolean,
    trim: true,
    default: false
  },
  whereDoYouTypicallyShareYourLivestreams: {
    type: String,
    required: true,
    trim: true
  },
  airConditioning: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  placeForRetreatForAWhile: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  toiletsNearby: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  private: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  thePredominantlyReligiousBeliefOfTheArea : {
    type: String,
    required: true,
    trim: true
  },
  offeringDetails: {
    type: String,
    required: true,
    trim: true
  }
},
{
  timestamps: true
});





module.exports = mongoose.model('invitingPastorFormFormSchema', InvitingPastorFormFormSchema);