const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gunschema = new Schema({
  name: {
    type: String,
    trim: true
  },
  calibre: {
    type: String,
    trim: true
  },
  prn: {
    type: String,
    trim: true
  },
  src: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
});

const Gun = mongoose.model("Gun", gunschema);

module.exports = Gun;