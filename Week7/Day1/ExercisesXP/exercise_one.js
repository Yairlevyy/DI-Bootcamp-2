// Exercise 1

// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()

// // Will alert "inside the funcOne function 3"

// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //Will get an error because you can assign a new value to a const.


// #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }


// // #2.1 - run in the console:
// funcThree()

// Will display "inside the funcThree function 0"

// funcTwo()
// funcThree()

// Will display "inside the funcThree function 5"

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// Will get an error because you can assign a new value to a const.


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

// Will alert "inside the funcFive function hello"

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()

// The output will be "inside the funcSix function test" since we declaring again the variable a inside the function.

// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// If the first variable will be a const will not make any changes since we are definig again the a variable inside the scope of the function.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console

// Will display "in the if block 5" and "outside of the if block 2".

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// Will not change the display, since inside the block we declring again the variable a.