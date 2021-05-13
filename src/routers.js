const router = require("express").Router();

const subController = require("./controllers/subscriber.controllers");

router.get("", subController.get);

router.post("/create", subController.create);

router.post("/notify-subs", subController.notify);

module.exports = router;
