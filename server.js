const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser);

mongoose.connect(
  "mongodb+srv://gauravcrd:crd@gaurav>@cluster0.0t7qy.mongodb.net/<react-shopping-cart>?retryWrites=true&w=majority",
  {
    newNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);
