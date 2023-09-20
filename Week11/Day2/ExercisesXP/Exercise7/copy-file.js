const fs = require('fs');

fs.readFile('source.txt','utf-8',(err,data)=>{
    fs.writeFile('destination.txt',data,'utf-8',(err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }

    console.log('File has been successfully copied.');
  })
});

