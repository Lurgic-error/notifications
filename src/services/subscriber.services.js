const subscriberModel = require("../models/subscribers");

async function createSubscriber(sub) {
  console.log(sub);
  const subscriber = await subscriberModel.create(sub);
  return subscriber;
}

async function getSubscribers(username) {
  if (username) {
    const subscriber = await subscriberModel.find({
      username,
    });
    if (!subscriber) throw "Subscriber not found.";
    return subscriber;
  }
  return await subscriberModel.find({});
}

async function notifySubscribers() {
  return await getSubscribers();
}

module.exports = Object.freeze({
  createSub: createSubscriber,
  getSubs: getSubscribers,
  notifySubs: notifySubscribers,
});
