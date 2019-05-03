const fs = require('fs');

fs.appendFile('newfile1.text', 'hello world', function(err) {
  if (err) throw err;
  console.log('saved');
});

fs.open('newfile12.text', 'w', function(err){
  if (err) throw err;
  console.log('open');
});
