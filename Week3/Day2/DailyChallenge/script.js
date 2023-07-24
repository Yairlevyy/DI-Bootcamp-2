// Exercise 1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
fruits.sort();
fruits.push("kiwi");
fruits.splice(1,1);
fruits.reverse();

// Exercise 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let orange = moreFruits[1][1];

