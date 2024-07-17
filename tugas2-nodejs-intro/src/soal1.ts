const fs = require('fs');

fs.readFile('remainder.txt', 'utf8', (err: any, data: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});