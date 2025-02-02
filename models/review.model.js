const { default: mongoose } = require("mongoose");

const reviewModel = new mongoose.Schema({
  id: String,
  product: String,
  reviewer: String,
  rating: String,
  profile: String,
  video: String,
  description: String,
  images: [String],
});

module.exports = mongoose.model("reviews", reviewModel);
