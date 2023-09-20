const fs = require('fs');

function readFile(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
        console.error('Error reading the file:', err);
        return;
        }
        console.log('File content:', data);
    });
};

function writeFile(path,content){
    fs.writeFile(path,content,(err)=>{
        if (err) {
        console.error('Error writing to file:', err);
        } else {
        console.log('Data has been written to the file successfully.');
        }
    });
};

module.exports = {
    readFile,
    writeFile
};