const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    name : { type : String, required: true },
    countryCode: {type : String, required : true},
    
  },
);

module.exports = mongoose.model("City", stateSchema);
