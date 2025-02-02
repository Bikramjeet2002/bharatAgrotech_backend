const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  shortDescription: String,
  price: String,
  images: [
    {
      url: String,
    },
  ],
  rating: String,
  specifictions: {
    Design: String,
    Type: String,
    Available_Hole_Sizes: String,
    Flat_Size: String,
    Available_Colors: String,
    Packaging_Per_Box: String,
    Material_Used: String,
    Overall_Length: String,
  },
});

module.exports = mongoose.model("products", productSchema);
