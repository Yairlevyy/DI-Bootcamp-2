// Exercise 1

let food = "chocolate";
let meal = "breakfast";

console.log("I eat", food, "at every", meal)

// Exercise 2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory."];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2];

console.log("I watched", myWatchedSeriesLength, "series :", myWatchedSeriesSentence )

// Part 2

myWatchedSeries.splice(2,1,"friends");
myWatchedSeries.push("Suits");
myWatchedSeries.unshift("Prison Break");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

// Exercise 3

let temp = 25;
let far = temp/5*9+32;
console.log(temp + "°C", "is", far + "°F." );

// Exercise 4

   let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 because a = 34 and b = 21.
    // Actual: 55.

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 because the a was redefined.
    // Actual: 23.

    // The value of c will be undefined since there is no value assined to him.

    console.log(3 + 4 + '5');
    // Prediction: 12 because the engine will convert the 5 to a numbers.
    // Actual: 12.

// Exercise 5

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: NaN since that's a type.
// Actual: number

typeof("hello")
// Prediction: string 
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: comparaison
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual:"hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual:

"johnny" + 5
// Prediction: NaN
// Actual:

"johnny" - 5
// Prediction:
// Actual: "johnny5"

99 * "hello"
// Prediction: NaN
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false


// Exercise 6

5 + "34"
// Prediction: 39
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 1
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:"  "
// Actual:"  "

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: NaN
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: ...
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
