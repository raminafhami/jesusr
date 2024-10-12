const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });
    console.log(`Mongodb Connected`);
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;