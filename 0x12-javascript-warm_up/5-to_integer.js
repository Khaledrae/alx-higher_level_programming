#!/usr/bin/node
const args = process.argv.slice(2);
const arg = parseInt(args[0], 10);
if (!isNaN(arg)) {
  console.log('My number: ' + arg);
} else {
  console.log('Not a number');
} 
