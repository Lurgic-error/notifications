const subscriberServices = require("../services/subscriber.services");

async function createSubController(req, res) {
  try {
    await subscriberServices.createSub(req.body);
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
    await subscriberServices.notifySubs(req.body);
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
