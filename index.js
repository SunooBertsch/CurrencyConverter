const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();
const Satori = require("./satori");

Satori();

app.get("/currency", (req, res) => {
  res.send(Satori.data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
