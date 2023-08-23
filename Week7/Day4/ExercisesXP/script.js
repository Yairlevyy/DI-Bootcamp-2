// Exercise 1

// const sumFunc = (num1,num2) => num1+num2;

// // Exercise 2

// function convertKgtoG(kg) {
//     return kg*1000
// };

// const convertKgtoGExpress = function(kg){
//     kg*1000
// };

// // The function declaration can be called before it's defined, wich is not the case of the function expression that will give an error if we call it before delare it.

// const convert = (kg) => kg*1000;

// // Exercise 3

// (function(children,partner_name,location,job_title){
//     let p = document.createElement('p');
//     p.innerHTML = `You will be a ${job_title} in ${location}, and married to ${partner_name} with ${children} kids.`
//     document.body.appendChild(p);
// })();

// // Exercise 4

// let container = document.querySelector(".container");

// (function(name){
//     let div = document.createElement('div');
//     div.innerText = name;
//     container.appendChild(div)
// })("Yair");

// Exercise 5

// //Part 1

// function makeJuice(size) {
//     function addIngredients(first,second,third) {
//         let p = document.createElement('p');
//         p.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`;
//         document.body.appendChild(p)
//     };
//     addIngredients('banana','apple','orange')
// };

// makeJuice('medium');

// // Part 2

// function makeJuice(size) {
//     let ingredients = [];
//     function addIngredients(first,second,third) {
//         ingredients.push(first,second,third);
//             function displayJuice(){
//                 let p = document.createElement('p');
//                 p.innerHTML = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}.`;
//                 document.body.appendChild(p)
//             }
//         ingredients.length == 6 ? displayJuice() : null
//     };
//     addIngredients('banana','apple','orange')
//     addIngredients('ananas','mango','strawberries')
// };

// makeJuice('medium');

