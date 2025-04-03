// module.exports
// require

const firstModule = require("./first-module");


console.log(firstModule.add(2,10));

try {
    console.log('trying to divide by zero');
    let result = firstModule.divide(10, 1);
    console.log("result: ",result);
}catch(error) {
    console.error('Error:', error);
}


// module wrapper
// (
//     function (exports, require, module, __filename, __dirname) {
//         // your moudule code goes here

//     }
// )