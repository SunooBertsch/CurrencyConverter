const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

const Satori = require("./dataFeed/satori");
Satori();

require("./routes/currencyRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
