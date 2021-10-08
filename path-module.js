const path = require('path');
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// access only the last part of a path (file name)
const base = path.basename(filePath);
console.log(base);

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);