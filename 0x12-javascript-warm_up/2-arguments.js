#!/usr/bin/node
const args = process.argv.slice(2);
if (args < 1) {
  console.log('No Argument');
} else if (args>1) {
  console.log('Arguments found');
} else {
 console.log('Argument found');
}
