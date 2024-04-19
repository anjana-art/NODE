 const {fullName} = require("./fullName.js")
 const {messageSend} = require("./messageSend.js")
const computeModule = require("./myModule.js")

console.log("Hello World")



fullName("anjana" , "nja")

for( let i = 0; i<5; i++){
    console.log(i)
};

const sum = computeModule.plus(3, 9);
console.log("sum is " + sum);

const subtraction = computeModule.minus(90,48);
console.log("subtraction is " + subtraction);



messageSend("Dan", "hello , how are  you", "new message")