const { readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);


// node will look for the file - if there's none, node will create it; if file exists, node will override content of file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // adding this flag tells node to append the above content (entire code) to the original content of the file; by default, we are overriding everything
);
console.log('done with this task');
console.log('starting the next one');