const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const {createReport} = require('docx-templates');
const fs = require('fs');

const InvitingPastorForm = require('../models/InvitingPastorForm');
const path = require('path');





const createNewInvitingPastorForm = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  try {
    const newInvitingPastorForm= new InvitingPastorForm({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      founder: req.body.founder,
      churchName: req.body.churchName,
      churchWebsite: req.body.churchWebsite,
      faceBook: req.body.faceBook,
      extender: req.body.extender,
      numberOfConnectedChurches: req.body.numberOfConnectedChurches,
      expectedAttendance: req.body.expectedAttendance,
      numberOfLeadersAndPastorsAttending: req.body.numberOfLeadersAndPastorsAttending,
      eventDate: req.body.eventDate,
      messageThemeOrScriptureFocus: req.body.messageThemeOrScriptureFocus,
      AdditionalResponsibilities: req.body.AdditionalResponsibilities,
      financialResponsibilityForTheTravelArrangements: req.body.financialResponsibilityForTheTravelArrangements,
      financialResponsibilityForTheAccommodation: req.body.financialResponsibilityForTheAccommodation,
      transportUponArrivalAndDeparture: req.body.transportUponArrivalAndDeparture,
      durationOfWorship: req.body.durationOfWorship,
      speakingTime: req.body.speakingTime,
      alterCallTime: req.body.alterCallTime,
      translatorBeProvided: req.body.translatorBeProvided,
      language: req.body.language,
      catchersOrMinistrySupport: req.body.catchersOrMinistrySupport,
      churchOpenToTheManifestation: req.body.churchOpenToTheManifestation,
      livestream: req.body.livestream,
      allowedToFilm: req.body.allowedToFilm,
      whereDoYouTypicallyShareYourLivestreams: req.body.whereDoYouTypicallyShareYourLivestreams,
      airConditioning: req.body.airConditioning,
      placeForRetreatForAWhile: req.body.placeForRetreatForAWhile,
      toiletsNearby: req.body.toiletsNearby,
      private: req.body.private,
      thePredominantlyReligiousBeliefOfTheArea: req.body.thePredominantlyReligiousBeliefOfTheArea,
      offeringDetails: req.body.offeringDetails
    });

    await newInvitingPastorForm.save();

    // const template = fs.readFileSync(path.join(process.cwd(), './assets/templates/pastorsInvitation.docx'));

    // const buffer = await createReport({
    //   template,
    //   data: {
    //     name: 'John',
    //     email: 'Appleseed',
    //     test: "⬛",
    //     nTest: "⬜"
    //   },
    //   cmdDelimiter: ['+++', '+++'],
    // });

    // fs.writeFileSync('report.docx', buffer)

    res.json(newInvitingPastorForm);
    

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Something went wrong!" }] });
  };
});





module.exports = {
  createNewInvitingPastorForm
};