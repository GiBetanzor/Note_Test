// npm i <packageName> // install only in this project
// npm install -g <packageName> // install globally
// npm init // step by step, enter to skip
// npm init -y // everything in default

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);