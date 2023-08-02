let number = prompt('Please enter a number to start the game!');
let max = number;
for (let i = 1; i < 999; i++) {
    if (number <= 0 || number - i <= 0) {
        console.log('0 bottle of beer on the wall');
        break;
    } else if (i == 1) {
        console.log(`${number} bottles of beer on the wall`);
        console.log(`${number} bottles of beer`);
        console.log(`Take ${i} down, pass it around`);
        console.log(`${number-i} bottles of beer on the wall`);
        number = number - i;
    } else {
        console.log(`${number} bottles of beer on the wall`);
        console.log(`${number} bottles of beer`);
        console.log(`Take ${i} down, pass them around`);
        console.log(`${number-i} bottles of beer on the wall`);
        number = number - i;
    }
};