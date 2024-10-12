const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const { specs, swaggerUi } = require('./config/swagger');


require('dotenv').config();

//Connect database
connectDB();

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/api/utils", require("./routes/utilsRoutes"));
app.use("/api/adminAuth", require("./routes/adminAuthRoutes"));
app.use("/api/eventQuestionForm", require("./routes/eventQuestionFormRoutes"));
app.use("/api/joinOurTeamForm", require("./routes/joinOurTeamFormRoutes"));
app.use("/api/prayerRequestForm", require("./routes/prayerRequestFormRoutes"));
app.use("/api/shareYourTestimonyForm", require("./routes/shareYourTestimonyFormRoutes"));
app.use("/api/getUpdatesForm", require("./routes/getUpdatesFormRoutes"));
app.use("/api/invitingPastorForm", require("./routes/invitingPastorFormRoutes"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message || "Something went wrong!");
});





module.exports = app;
