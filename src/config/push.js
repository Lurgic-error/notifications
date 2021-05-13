const webPush = require("web-push");

webPush.setVapidDetails(
  "mailto:test@test.com",
  process.env.PublicKey,
  process.env.PrivateKey
);

module.exports = { push: webPush };
