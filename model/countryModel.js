const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name : { type: String, required: true },
    country_Code : {type : String, required : true},
    
  },
);
module.exports = mongoose.model("Country", countrySchema);


//module.exports = mongoose.model("State", stateSchema);




