// // Exercise 1

// function infoAboutMe() {
//     console.log("Hello my name Yair and i am 20 yo");
// }

// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor} `);
// };

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// // Exercise 2

// function calculateTip() {
//     let amount = prompt('Please enter the amount of the bill.');
//     let tip;

//     if (amount < 50) {
//         tip = parseInt(amount*0.2);
//     } else if (amount >= 50 && amount < 200) {
//         tip = parseInt(amount*0.15);
//     } else {
//         tip = parseInt(amount*0.1);
//     }

//     console.log(parseInt(amount)+tip);
// };

// calculateTip();

// // Exercise 3

// function isDivisible() {
//     let sum = 0;

//     for (let i=0;i<501;i++){
//         if (i%23== 0) {
//             console.log(i);
//             sum += i;
//         }
//     };

//     console.log(sum);
// }

// isDivisible();

// // Exercise 4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// };  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;
//     for (item of shoppingList) {
//         if (item in stock) {
//             total += prices[item];
//             stock[item] -= 1;
//         }
//     };
//     console.log(total)
// };

// myBill();

// Exercise 5

function changeEnough(itemPrice, amountOfChange) {

    console.log(itemPrice);
    console.log(amountOfChange);

    let counter = 0;
    let amount = 0;
    for (piece of amountOfChange) {
        console.log(piece);
        if (counter === 0) {
            amount += piece * 0.25;
            counter++;
        } else if (counter == 1) {
            amount += piece * 0.1;
            counter++;
        } else if (counter == 2) {
            amount += piece * 0.05;
            counter++;
        } else {
            amount += piece * 0.01;
            if (amount >= itemPrice) {
                console.log(true);
                return true;
            } else {
                console.log(false);
                return false;
            };
        };
    }

};

changeEnough(4.25, [25, 20, 5, 0]);

// Exercise 6

function hotelCost() {
    let nights = prompt('How many nights you want to stay ?');
    if (isNaN(nights)) {
        nights = prompt('How many nights you want to stay ?');
    } else {
        return parseInt(nights)*140;
    }
};

function planeRideCost() {
    let dest = prompt('To where do you want to go ?');
    if (typeof dest !== 'string' || dest == '') {
        dest = prompt('To where do you want to go ?');
    } else {
        if (dest.toLowerCase() == "london") {
            return 183;
        } else if (dest.toLowerCase() == "paris") {
            return 220;
        } else {
            return 300;
        }
    }
};

function rentalCarCost() {
    let days = prompt('How many days do you want to rent the car ?');
    
    if (isNaN(days)) {
        days = prompt('How many days do you want to rent the car ?');
    } else {
        if (days > 10) {
            return parseInt(days)*38;
        } else {
            return parseInt(days)*40;
        }
    }
};

function totalVacationCost() {
    let hotel = hotelCost(); 
    let ride = planeRideCost();
    let car = rentalCarCost();

    console.log(`The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${ride}.`)
}

totalVacationCost();