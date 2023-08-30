// // Exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// // The output will be : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Exercise 2

// function displayStudentInfo(objUser){
//     const {first,last} = objUser;
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// // Exercise 3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const usersArray = Object.entries(users);

// usersArray.forEach((item,index,arr)=>{
//     arr[index][1] = item[1]*2
// });

// console.log(usersArray)

// // Exercise 4

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');

// // The output will be: object.

// console.log(typeof member);

// // Exercise 5

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

// const lab = new Labrador('jonkey','155')

// console.log(lab);

// // Exercise 6

// console.log([2] === [2]) // => False
// console.log({} === {}) // => False

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) // => 4
// console.log(object3.number) // => 4
// console.log(object4.number) // => 5

class Animal {
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class Mamal extends Animal {
    constructor(name,type,color){
        super(name,type,color);
    };

    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
};

const farmerCow = new Mamal('Lily','Cow','Brown and white');

console.log(farmerCow.sound('Mooo'));
