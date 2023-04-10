const express = require("express");
const depend_route = express();
const bodyParser = require("body-parser");

depend_route.use(bodyParser.json());
depend_route.use(bodyParser.urlencoded({extended:true}));

const dependcontroller = require("../contoller/dependController")


//depend_route.post("/getall", dependcontroller.getall);


depend_route.get("/get-countries", dependcontroller.getcountries);
depend_route.get("/get-states", dependcontroller.getstates);
depend_route.get("/get-cities", dependcontroller.getcities);

module.exports = depend_route;
