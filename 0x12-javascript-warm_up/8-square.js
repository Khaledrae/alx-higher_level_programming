#!/usr/bin/node
const args = process.argv.slice(2);
const arg = parseInt(args[0], 10);
if (!isNaN(arg)) {
  for (let i = 1; i < arg; i++) {
    let text = '';
    for (let j = 1; j < arg; i++) {
      text += 'x';
    }
    console.log(text);
  }
} else {
  console.log('Missing size');
}

