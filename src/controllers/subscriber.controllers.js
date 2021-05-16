const subscriberServices = require("../services/subscriber.services");
const { push } = require("../config/push");

async function createSubController(req, res) {
  try {
    const subscriber = await subscriberServices.createSub(req.body);
    push.sendNotification(
      subscriber.subscription,
      JSON.stringify({
        title: `Welcome ${subscriber.username}`,
        body: "Successfully subscribed to Vandu Notifications.",
      })
    );
    res.json({
      message: "success",
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
}

async function getSubsController(req, res) {
  try {
    const subs = await subscriberServices.getSubs();
    return res.json({
      subs,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
}

async function notifySubsController(req, res) {
  try {
    const subs = await subscriberServices.notifySubs(req.body);
    subs.forEach(async (sub) => {
      push.sendNotification(
        sub._doc.subscription,
        JSON.stringify({
          title: req.body.title,
          body: req.body.body,
        })
      );
    });
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
}

module.exports = Object.freeze({
  create: createSubController,
  get: getSubsController,
  notify: notifySubsController,
});
