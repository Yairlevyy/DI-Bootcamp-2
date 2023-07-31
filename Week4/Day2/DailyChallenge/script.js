let sen = prompt('Enter severals words separate by a ","');
let senArr = sen.split(",");
let longW = '';

for (word of senArr) {
    if (word.length > longW.length) {
        longW = word;
    };
};

for (let i = 0; i < senArr.length; i++) {
    if (i == 0) {
        console.log('*'.repeat(longW.length + 4));
        console.log(`* ${senArr[i]}  *`);
    } else if (i == senArr.length - 1) {
        console.log(`* ${senArr[i]} *`);
        console.log('*'.repeat(longW.length + 4));
    } else {
            console.log(`* ${senArr[i]}${' '.repeat(longW.length - senArr[i].length)} *`);
    }
};