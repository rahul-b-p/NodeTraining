const fs = require('fs');

console.log('Starting to read file 1...');
fs.readFile('somefile.tx', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file1:', err);
  } else {
    console.log('File 1 contents:', data);
  }
});
console.log('Started reading file 2...');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file2:', err);
  } else {
    console.log('File 2 contents:', data);
  }
});
console.log('Finished initiating file reads.');
