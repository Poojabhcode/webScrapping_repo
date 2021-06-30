let fs = require("fs");

let p= new Promise(function executor(resolve,reject){
 fs.readFile("f.txt",function (err,data){
     if(err) reject(err);
     else resolve(data);

 });

});

p.then(function (data){
    console.log("data is recieved");
    console.log(data + "");
});

p.catch(function (err){
    //err jo krna h vo kro
})
