// Exercise 1

// let h1 = document.querySelector('h1');
// console.log(h1);

// let article = document.querySelector('article');
// let last = article.lastElementChild;
// last.remove();

// let h2 = document.querySelector('h2');
// h2.addEventListener('click', changeH2Bg);

// function changeH2Bg() {
//     h2.style.backgroundColor = 'red';
// }

// let h3 = document.querySelector('h3');
// h3.addEventListener('click', changeH3Display);

// function changeH3Display() {
//     h3.style.display = 'none';
// };

// let button = document.createElement('button');
// button.innerHTML = 'Change Font Weight'
// article.appendChild(button);

// button.addEventListener('click',function(){
//     article.style.fontWeight = 'bold'
// });

// Exercise 2

// let form = document.forms[0];
// console.log(form);

// let fname = document.getElementById('fname');
// console.log(fname)

// let lname = document.getElementById('lname');
// console.log(lname)

// let firstname = form.elements.firstname;
// console.log(firstname)

// let lastname = form.elements.lastname;
// console.log(lastname);

// let ul = document.querySelector('.usersAnswer');

// form.addEventListener('submit', function() {
//     event.preventDefault();
//     // We use it to prevent the default behavior of the browser when a form is submit, wich is navigating to a new page or refresh the actual page.
//     let firstValue = firstname.value;
//     let lastValue = lastname.value;

//     createLi(firstValue);
//     createLi(lastValue);
// });

// function createLi(input_value) {
//     if (input_value !== '') {
//         let li = document.createElement('li');
//         li.innerHTML = input_value;
//         ul.appendChild(li)
//     }
// };

// Exercise 3

// let allBoldItems;

// function getBoldItems() {
//     allBoldItems = document.getElementsByTagName('strong')
// };

// function highlight() {
//     for (item of allBoldItems) {
//         item.style.color = 'blue'
//     }
// };

// function returnItemsToDefault() {
//     for (item of allBoldItems) {
//         item.style.color = 'black'
//     }
// };

// getBoldItems();

// for (item of allBoldItems) {
//     item.addEventListener('mouseover', highlight)
//     item.addEventListener('mouseout', returnItemsToDefault)
// };

// Exercise 4

// let form = document.forms[0];

// form.addEventListener('submit',calculate);

// function calculate(e) {
//     e.preventDefault()
//     const radius = form.elements.radius.value;
//     const volume = caculVolume(radius);
//     form.elements.volume.value = volume.toFixed(2)
// };

// function caculVolume(radius) {
//     const pi = Math.PI;
//     const volume = (4/3) * pi * Math.pow(radius, 3);
//     return volume;
// };

// Exercise 5

// let h1 = document.querySelector('h1');

// h1.addEventListener('mouseover', function(){
//     h1.style.cursor = 'pointer';
//     h1.style.border = '2px solid black';
// });

// h1.addEventListener('mouseout', function(){
//     h1.style.cursor = 'default';
//     h1.style.border = '';
// });

// h1.addEventListener('click', function(){
//     h1.style.borderRadius = '10px';
//     h1.style.padding = '10px';
// });

// h1.addEventListener('dblclick', function(){
//     h1.style.backgroundColor = 'green';
// });
