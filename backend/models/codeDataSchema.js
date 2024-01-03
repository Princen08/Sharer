const mongoose = require("mongoose");
const moment = require("moment");

const ReactFormDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: String,
  },
}, {timestamps: true});

const CodeData = mongoose.model("CodeData", ReactFormDataSchema);
module.exports = CodeData;
