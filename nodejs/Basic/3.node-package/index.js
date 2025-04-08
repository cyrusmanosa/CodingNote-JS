const lodash = require('lodash');

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const capitalize = lodash.map (names, lodash.capitalize);

console.log(capitalize);