#!/usr/bin/node
const args = process.argv.slice(2);
const arg = parseInt(args[0], 10);
if (!isNaN(arg)) {
  for (i = 1; i < arg; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
