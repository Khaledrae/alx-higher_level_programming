#!/usr/bin/node
let args = process.argv.slice(2);
args = args.legnth;
if (args < 1) {
  console.log('No Argument');
} else if (args > 1) {
  console.log('Arguments found');
} else {
 console.log('Argument found');
}
