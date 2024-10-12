const { check } = require('express-validator');





const createNewInvitingPastorFormValidator = [
  check('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be string'),
  check('email')
    .not().isEmpty().withMessage('Email is requierd')
    .isString().withMessage('Email must be string')
    .isEmail().withMessage('Please include a valid Email'),
  check('phoneNumber')
    .not().isEmpty().withMessage('phoneNumber is requierd')
    .isString().withMessage('phoneNumber must be string'),
  check('founder')
    .not().isEmpty().withMessage('founder is requierd')
    .isString().withMessage('founder must be string'),
  check('churchName')
    .not().isEmpty().withMessage('churchName is requierd')
    .isString().withMessage('churchName must be string'),
  check('churchWebsite')
    .optional()
    .isString().withMessage('churchWebsite must be string'),
  check('faceBook')
    .optional()
    .isString().withMessage('faceBook must be string'),
  check('extender')
    .not().isEmpty().withMessage('extender is requierd')
    .isString().withMessage('extender must be string'),
  check('numberOfConnectedChurches')
    .optional()
    .isNumeric().withMessage('numberOfConnectedChurches must be number'),
  check('expectedAttendance')
    .not().isEmpty().withMessage('expectedAttendance is requierd')
    .isNumeric().withMessage('expectedAttendance must be number'),
  check('numberOfLeadersAndPastorsAttending')
    .optional()
    .isNumeric().withMessage('founder must be number'),
  check('eventDate')
    .not().isEmpty().withMessage('eventDate is requierd')
    .isString().withMessage('eventDate must be string'),
  check('messageThemeOrScriptureFocus')
    .not().isEmpty().withMessage('messageThemeOrScriptureFocus is requierd')
    .isString().withMessage('founder messageThemeOrScriptureFocus be string'),
  check('AdditionalResponsibilities')
    .optional()
    .isString().withMessage('AdditionalResponsibilities must be string'),
  check('financialResponsibilityForTheTravelArrangements')
    .not().isEmpty().withMessage('financialResponsibilityForTheTravelArrangements is requierd')
    .isString().withMessage('financialResponsibilityForTheTravelArrangements must be string'),
  check('financialResponsibilityForTheAccommodation')
    .not().isEmpty().withMessage('financialResponsibilityForTheAccommodation is requierd')
    .isString().withMessage('financialResponsibilityForTheAccommodation must be string'),
  check('transportUponArrivalAndDeparture')
    .not().isEmpty().withMessage('transportUponArrivalAndDeparture is requierd')
    .isString().withMessage('transportUponArrivalAndDeparture must be string'),
  check('durationOfWorship')
    .not().isEmpty().withMessage('durationOfWorship is requierd')
    .isString().withMessage('durationOfWorship must be string'),
  check('speakingTime')
    .not().isEmpty().withMessage('speakingTime is requierd')
    .isString().withMessage('speakingTime must be string'),
  check('alterCallTime')
    .not().isEmpty().withMessage('alterCallTime is requierd')
    .isString().withMessage('alterCallTime must be string'),
  check('translatorBeProvided')
    .not().isEmpty().withMessage('translatorBeProvided is requierd')
    .isBoolean().withMessage('translatorBeProvided must be boolean'),
  check('language')
    .optional()
    .isString().withMessage('language must be string'),
  check('catchersOrMinistrySupport')
    .not().isEmpty().withMessage('catchersOrMinistrySupport is requierd')
    .isBoolean().withMessage('catchersOrMinistrySupport must be boolean'),
  check('churchOpenToTheManifestation')
    .not().isEmpty().withMessage('churchOpenToTheManifestation is requierd')
    .isBoolean().withMessage('churchOpenToTheManifestation must be boolean'),
  check('livestream')
    .not().isEmpty().withMessage('livestream is requierd')
    .isBoolean().withMessage('livestream must be boolean'),
  check('allowedToFilm')
    .not().isEmpty().withMessage('allowedToFilm is requierd')
    .isBoolean().withMessage('allowedToFilm must be boolean'),
  check('whereDoYouTypicallyShareYourLivestreams')
    .not().isEmpty().withMessage('whereDoYouTypicallyShareYourLivestreams is requierd')
    .isString().withMessage('whereDoYouTypicallyShareYourLivestreams must be string'),
  check('airConditioning')
    .not().isEmpty().withMessage('airConditioning is requierd')
    .isBoolean().withMessage('airConditioning must be boolean'),
  check('placeForRetreatForAWhile')
    .not().isEmpty().withMessage('placeForRetreatForAWhile is requierd')
    .isBoolean().withMessage('placeForRetreatForAWhile must be boolean'),
  check('toiletsNearby')
    .not().isEmpty().withMessage('toiletsNearby is requierd')
    .isBoolean().withMessage('toiletsNearby must be boolean'),
  check('private')
    .not().isEmpty().withMessage('private is requierd')
    .isBoolean().withMessage('private must be boolean'),
  check('thePredominantlyReligiousBeliefOfTheArea')
    .not().isEmpty().withMessage('thePredominantlyReligiousBeliefOfTheArea is requierd')
    .isString().withMessage('thePredominantlyReligiousBeliefOfTheArea must be string'),
  check('offeringDetails')
    .not().isEmpty().withMessage('offeringDetails is requierd')
    .isString().withMessage('offeringDetails must be string')   
];





module.exports = {
  createNewInvitingPastorFormValidator
};