const mongoose = require("mongoose");

const ReactorSchema = new mongoose.Schema({
  entryTemperature1: { type: String },
});
const ReactorModel = mongoose.model("ReactorSchema", ReactorSchema);

module.exports = ReactorModel;
