#!/usr/bin/node
const args = process.argv.slice(2);
const arg = args[0];
if (arg != undefined){
  console.log(arg);
} else {
  console.log('No argument');
}
