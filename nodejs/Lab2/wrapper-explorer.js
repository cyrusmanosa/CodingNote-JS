console.log('Node module wrapper demo');

console.log('__filename in wrappper explorer:', __filename);
console.log('__dirname in wrappper explorer:', __dirname);

module.exports.greet = function(name) {
    console.log('Hello, ' + name + '!');

}