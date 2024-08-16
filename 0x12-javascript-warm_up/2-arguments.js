#!/usr/bin/node
const args = process.argv().s;ice('2');
if(args<1) console.log('No Argument');
else if(args>1) console.log('Arguments found');
else console.log('Argument found');
console.log(args);
