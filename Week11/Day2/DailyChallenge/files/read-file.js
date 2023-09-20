import fs from 'fs';

function displayFiles(path){
    fs.readFile(path,'utf-8',(err,data)=>{
    console.log(data)
    });
};

export default displayFiles;
