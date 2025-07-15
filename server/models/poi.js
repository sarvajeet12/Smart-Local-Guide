const mongoose = require("mongoose");

const poiSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  description: String,
});

module.exports = mongoose.model("POI", poiSchema);
