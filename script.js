const request = require("request");


request("http://google.com",callback);

function callback(error,response,body){
    console.log("body:",body);
}