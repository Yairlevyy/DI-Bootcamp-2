import data from './data.js'

function calculate(array){
    let counter = 0;
    let total = 0;
    for (let obj of array){
        counter++
        total += obj["age"]
    };
    let avg = total/counter;
    console.log(avg);
};

calculate(data);
