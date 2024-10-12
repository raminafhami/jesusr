// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: [
    path.join(process.cwd(), './routes/utilsRoutes.js'),
    path.join(process.cwd(), './routes/eventQuestionFormRoutes.js'),
    path.join(process.cwd(), './routes/joinOurTeamFormRoutes.js'),
    path.join(process.cwd(), './routes/prayerRequestFormRoutes.js'),
    path.join(process.cwd(), './routes/shareYourTestimonyFormRoutes.js'),
    path.join(process.cwd(), './routes/getUpdatesFormRoutes.js'),
    path.join(process.cwd(), './routes/invitingPastorFormRoutes.js'),

  ], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi
};