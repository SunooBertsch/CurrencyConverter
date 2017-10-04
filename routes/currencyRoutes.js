const Satori = require("../dataFeed/satori");

module.exports = app => {
  app.get("/currency", (req, res) => {
    Satori();
    res.send(Satori.data.rates);
  });
};
