const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/userapi");

const dependRoute = require("./routes/dependRoute")
app.use("/api", dependRoute )

app.listen(12000, function(){
    console.log("listening to the port");               
    }
)
