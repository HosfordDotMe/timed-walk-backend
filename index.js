const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/test')
const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const testsRouter = require("./routes/test");
app.use("/", cors(), testsRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT);
