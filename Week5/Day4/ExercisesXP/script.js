// Exercise 1

// setTimeout(function(){
//     alert('Hello World')
// },2000);

// let div = document.querySelector('div');

// setTimeout(function() {
//     const p = document.createElement('p');
//     p.innerHTML = 'Hello World';
//     div.appendChild(p)
// },2000);

// let counter = 0;

// const interval = setInterval(function(){
//     if (counter < 5){
//         const p = document.createElement('p');
//         p.innerHTML = 'Hello World';
//         div.appendChild(p);
//         counter++
//     } else {
//         stopInterval();
//     }

// },2000)

// let button = document.querySelector('button');

// button.addEventListener('click',stopInterval)

// function stopInterval() {
//     clearInterval(interval)
// };

// Exercise 2

// let moveTime;

// function myMove() {
//     let left = 0;
//     const animateBox = document.querySelector('#animate');
//     moveTime = setInterval(function(){
//         if (left < 351) {
//             left++
//             animateBox.style.left = left;
//         }
//     })
// };

// function stop() {
//     clearInterval(moveTime)
// };

// Exercise 3

// function onDragStartBox(e) {
//     e.dataTransfer.setData('id',e.target.id)
// };

// function onDragOverTarget(e) {
//     e.preventDefault()
// };

// function onDropOverTarget(e) {
//     e.preventDefault();

//     const id = e.dataTransfer.getData('id');
//     const box = document.getElementById(id);
//     e.target.appendChild(box)
// };