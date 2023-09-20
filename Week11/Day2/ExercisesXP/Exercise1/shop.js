const {products} = require('./product.js');

function search(name){
    for (obj of products) {
        if (obj["name"] === name) {
            console.log(obj)
            break;
        }
    }
};

search('DateJust');
search('DayDate');
search('Daytona');
