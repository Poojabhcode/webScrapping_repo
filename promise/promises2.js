let fs = require("fs");
function f(path){
    return new Promise(function executor(resolve,reject){
        fs.readFile(path, function(err, data){
            if (err) reject(err);
            else resolve(data);

        });
    });
}

function laterOp(data){
    console.log(data + "");

}

let p1 = f("f.txt");//abc
let p2 = f("f2.txt");//pqrs
let p3 = f("f3.txt");//123

p1.then(laterOp);
p2.then(laterOp);
p3.then(laterOp);