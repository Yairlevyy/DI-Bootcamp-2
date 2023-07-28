// Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push('Yair');
console.log(people.indexOf('Mary'));
const newPeople = people.slice(2,4)
people.indexOf("Foo"); // Because is outside the array.
let last = people[people.length - 1];

for (let name of people) {
    console.log(name);
}

for (let i in people) {
    if (i == people.indexOf('Jason')) {
        break;
    }

    console.log(people[i])
};

// Exercise 2

const colors = ["white", "blue", "green", "yellow", "orange"];

for (let i = 0; i < colors.length; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

// Exercise 3

// let num;

// do {
//     num = prompt('Please enter a number!');
// } while (isNaN(num) || num < 10);

// Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log(building["numberOfFloors"]);

console.log(building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["thirdFloor"]);

console.log(building["nameOfTenants"][1], "have", building["numberOfRoomsAndRent"]["dan"][0], "rooms in his apartment");

let sarahRent = building["numberOfRoomsAndRent"]["sarah"][1];
let danRent = building["numberOfRoomsAndRent"]["dan"][1];
let davidRent = building["numberOfRoomsAndRent"]["david"][1];

if (sarahRent + davidRent > danRent) {
    danRent = 1200;
}

// Exercise 5

const family = {
  familyName: "Smith",
  familySize: 4,
  father: "John",
  mother: "Emily",
  children: ["Alice", "Bob"]
};

for (let x in family) {
    console.log(x);
};

for (let x in family) {
    console.log(family[x]);
};

// Exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let sentence = '';

for (let x in details) {
    sentence += x + ' ' + details[x] + ' '
};

console.log(sentence);

// Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let societyName = '';

for (x of names) {
    societyName += x[0]
}

let arr = societyName.split('').sort();

let finalSen = arr.join('').toUpperCase();

console.log(finalSen);