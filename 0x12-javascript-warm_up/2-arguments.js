#!/usr/bin/node
const args = process.argv.slice(2);
if (args.legnth < 1) {
  console.log('No Argument');
} else if (args.legnth > 1) {
  console.log('Arguments found');
} else {
 console.log('Argument found');
}
