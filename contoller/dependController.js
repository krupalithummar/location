
const Country = require("../model/countryModel")
const State = require("../model/stateModel");
const City = require("../model/cityModel")
const express = require("express")
const app = express()

const getcountries = async(req,res)=>{
  try{
    
  const Countries= await Country.find({});
  res.status(200).send({success : true , msg : "country data", data : Countries})

  }catch(err){
  res.status(400).send({success : false , msg : err.message })

  }
}


const getstates = async(req,res)=>{
    try{
        const States = await State.find((data)=> data.countryCode =='TE');
        res.status(200).json({States});
        //const States = await State.find({countryCode : req.body.country_code});
     // res.status(200).send({success : true , msg : "state data", data : States})
}
      
   
    catch(error){
      console.error(error.message);
    res.status(400).send({success : false , msg : error.message })

  }
}

const getcities = async(req,res)=>{
    try{
    const Cities = await City.find({name : req.body.statename});
    res.status(200).send({success : true , msg : "city data", data : Cities})

    }catch(err){
    res.status(400).send({success : false , msg : err.message })

  }
}
// 

// const request = require('request')

// // Request URL
// var url = 'http://192.168.0.121:6363/city/list';

// request(url, (error, response, body)=>{

   
	
// 	if(error) console.log(error)

// 	console.log(response.statusCode);
// 	console.log(body);
// });


const Data = require('../model/countryModel');
app.get('/', (req, res, next) => {
    request('http://192.168.0.115:6363/city/list', function (error, response, body) {
        var result = JSON.parse(body);
        console.log('body:', result); 
        


result = new Data({
       
          
         })
        result.save()
            .then(result => {
                console.log('Entry saved');
            })
            .catch(err => {
                console.log(err);
            });
        
    });
    
});


const Data = require('../model/countryModel');
app.post('/' , (req, res, next) );{
     request('http://192.168.0.115:6363/city/list', function (error, response, body) {
        var result = JSON.parse(body);
        console.log('body:', result); 
        

result = new Data({
  _id : req.body._id,
  name : req.body.name,
  countryCode : req.body.countryCode
            
         })
        result.save()
            .then(result => {
                console.log('Entry saved');
            })
            .catch(err => {
                console.log(err);
            });
        
    });
    
}

module.exports = {
 // getall,
  getcountries,
    getstates,
    getcities
}

/*http://192.168.0.115:6363/city/list

http://192.168.0.115:6363/state/list

http://192.168.0.115:6363/country/list
*/