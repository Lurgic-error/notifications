const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    username: { type: String },
  },
  {
    timestamps: true,
    strict: false,
  }
);

module.exports = mongoose.model("subscribers", subscriberSchema);
