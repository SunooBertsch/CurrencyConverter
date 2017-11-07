module.exports = app => {
  var RTM = require("satori-rtm-sdk");

  var endpoint = "wss://open-data.api.satori.com";
  var appKey = "Cf94eaFF201c1FBF1eFc2aedb90BBF36";
  var channel = "USGS-Earthquakes";

  var client = new RTM(endpoint, appKey);

  client.on("enter-connected", function() {
    console.log("Connected to Satori Earthquake Data!");
  });

  var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {
    history: { count: 10 }
  });

  subscription.on("rtm/subscription/data", function(pdu) {
    pdu.body.messages.forEach(function(msg) {
      module.exports.feed = msg;
    });
  });

  client.start();
};
