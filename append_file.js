const fs = require('fs');

//append conents to a file if file doesn't exit new file will be created
fs.appendFile('newfile1.text', 'hello world', function(err) {
  if (err) throw err;
  console.log('saved');
});


//depending on the flag argument file will be open to 'w' = write
fs.open('newfile12.text', 'w', function(err){
  if (err) throw err;
  console.log('open');
});

//will override a existing file, if the file doesn't exist new file will be created
fs.writeFile('newfile1.text', 'hiii', function(err) {
  if (err) throw err;
  console.log('rewrite!');
});

//delete file
fs.unlink('newfile12.text', function(err) {
  if (err) throw err;
  console.log('delete!');
});
