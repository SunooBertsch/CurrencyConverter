const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const http = require("http");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"),
    res.header("Access-Control-Allow-Headers", "Content-Type"),
    next();
});

const server = http.createServer(app);
const io = require("socket.io").listen(server);
server.listen(3123);

const Satori = require("./dataFeed/satori");
Satori();
// const Test = require("./test");
// Test();

// io.on("connection", client => {
//   console.log("connected to socket.io!");
//   client.on("subscribeToFeed", msg => {
//     console.log("client is subscribed", msg);
//     io.emit("Data feed", msg);
//   });
// });

require("./routes/currencyRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
