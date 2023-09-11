// // Exercise 1

// const compareToTen = (num) => {
//     return new Promise((res,rej)=>{
//         if (num <= 10){
//             res(num)
//         } else {
//             rej(num)
//         }
//     })
// };

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // Exercise 2

// const success = new Promise((res,rej)=>{
//     setTimeout(function(){
//         res('Success')
//     },4000)
// });

// success.then(data=>console.log(data))

// // Exercise 3

// Promise.resolve(3).then(data=>console.log(data))
// Promise.reject('Boo!')  
//     .then(data=>console.log(data))
//     .catch(e=>console.log(e))

// Exercise 4

// Quizz online.