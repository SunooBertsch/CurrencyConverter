module.exports = app => {
  var RTM = require("satori-rtm-sdk");

  var endpoint = "wss://open-data.api.satori.com";
  var appKey = "059fbd3a4bEfF9ed19A2fc589D9cb2bF";
  var channel = "exchange-rates";

  var client = new RTM(endpoint, appKey);

  client.on("enter-connected", function() {
    if (module.exports.data !== undefined) {
      console.log("Updating data feed!");
    } else {
      console.log("Connected to Satori RTM!");
    }
  });

  var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {
    history: { count: 10 }
  });

  subscription.on("rtm/subscription/data", function(pdu) {
    pdu.body.messages.forEach(msg => {
      module.exports.data = msg;
    });
  });

  client.start();
};
