//npm install jsonwebtoken
//npm install express nodemon
//npm init
//npm install

'use strict';
const { strict } = require('assert');
const fs = require('fs');
const jwt = require('jsonwebtoken'); // PAYLOAD
var payload={}
payload.datal= "Data 1"
payload.data2= "Data 2"
payload.data3= "Data 3"
payload.data4= "Data 4"
// key
var privateKEY =fs.readFileSync('./private1.key','utf8')

// Issuer

var i = 'CVR-ET'; 
var s = 'WebProgrammingLab'; 
var a ='http://localhost:1234/students'; 
var signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "24h",
    algorithm: "RS256"
};
    
var token = jwt.sign(payload, privateKEY, signOptions); 
console.log("Token: "+ token)