// Exercise 2

// function winBattle(){
//     return true;
// };

// const winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints)

// Exercise 3

// const checkStr = (value) => typeof value === 'string' ? true : false;

// console.log(checkStr('hello'))

// Exercise 4

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1.

// colors.forEach((value,index)=>{
//     console.log(`${index+1}# choice is ${value}`)
// })

// 2.

// colors.includes('Violet') ? console.log('Yeah!') : console.log("No...");

// Exercise 5

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.map((value,index) => {
//     switch (index) {
//         case 0:
//             console.log(`${index+1}${ordinal[1]} choice is ${value}`);
//             break;
//         case 1:
//             console.log(`${index+1}${ordinal[2]} choice is ${value}`);
//             break;
//         case 2: 
//             console.log(`${index+1}${ordinal[3]} choice is ${value}`);
//             break;
//         default:
//             console.log(`${index+1}${ordinal[0]} choice is ${value}`);
//     }
// })

// Exercise 6 

// let bankAmount = 0;
// const vat = 1.17;
// const expenses = ["+200", "-100", "+146", "+167", "-2900"];
// expenses.forEach((value,index,arr)=>{
//     arr[index] = value * vat
// })
// console.log(expenses)

// expenses.map((value) => {
//     bankAmount += value
// });

// console.log(bankAmount)




