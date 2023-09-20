const fs = require('fs');

const path = '../exercise7'

fs.readdir(path,(err,files)=>{
    if (err) {
    console.error('Error reading the directory:', err);
    return;
    }

    console.log('Files in the directory:');
    files.forEach((file) => {
    console.log(file);
    });
})