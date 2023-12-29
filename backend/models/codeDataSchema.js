const mongoose = require("mongoose");
const moment = require("moment");

const ReactFormDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const CodeData = mongoose.model("CodeData", ReactFormDataSchema);
module.exports = CodeData;
