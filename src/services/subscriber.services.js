const subscriberModel = require("../models/subscribers");
const { push } = require("../config/push");
async function createSubscriber(sub) {
  console.log(sub);
  const subscriber = await subscriberModel.create(sub);
  push.sendNotification(
    subscriber.subscription,
    JSON.stringify({
      title: `Welcome ${subscriber.username}`,
      body: "Successfully subscribed to Vandu Notifications.",
    })
  );
  return subscriber;
}

async function getSubscribers(username) {
  if (username) {
    const subscriber = await subscriberModel.find({
      username: "username",
    });
    if (!subscriber) throw "Subscriber not found.";
    return subscriber;
  }
  return await subscriberModel.find();
}

async function notifySubscribers(notification) {
  const subs = await subscriberModel.find({});

  subs.forEach(async (sub) => {
    console.log(`subs`, { ...sub._doc });
    push.sendNotification(
      { ...sub._doc },
      JSON.stringify({
        title: notification.title,
        body: notification.body,
      })
    );
  });
}

module.exports = Object.freeze({
  createSub: createSubscriber,
  getSubs: getSubscribers,
  notifySubs: notifySubscribers,
});
