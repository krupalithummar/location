const http = require("http");
const fs = require("fs");
const request = require("request");

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        request(
            'http://192.168.0.115:6363/city/list'
        )
        .on("data", (chunk)=>{
            const objdata = JSON.parse(chunk) 
            console.log(objdata);
        })
        .on ("end",(err)=>{
            if(err) return console.log("connection err", err);
            console.log("end")
        } )
    }
})

server.listen(8000, "127.0.0.1");



/*const request = require('request')

// Request URL
var url = 'http://192.168.0.115:6363/city/list';

request(url, (error, response, body)=>{

    const objdata = JSON.parse(body)
    console.log(objdata)

   
	
	if(error) console.log(error)

	console.log(response.statusCode);
	console.log(body);
});
*/