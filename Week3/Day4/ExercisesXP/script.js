// Exercise 1

let x = 25;
let y = 36;

if (x<y) {
    console.log('y is the biggest number');
} else if (x>y) {
    console.log('x is the biggest number');
};

// Exercise 2

let newDog  = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if(newDog == "Chihuahua") {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats')
};

// Exercise 3

let num = prompt('Please enter a number!');

if (num%2 == 0) {
    alert(`${num} is an even number`)
} else {
    alert(`${num} is an odd number`)   
};

// Exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const users_online = users.length;

if (users_online == 0) {
    console.log('no one is online');
} else if (users_online == 1) {
    console.log(`${users[0]} is online`);
} else if (users_online == 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`);
}