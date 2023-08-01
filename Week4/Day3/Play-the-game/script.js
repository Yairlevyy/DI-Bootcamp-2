let num = 1;;
let computerNumber = 2;
let counter = 0;

function playTheGame() {
    let result = confirm('Do you want to play the game?');

    if (result == false) {
        alert('No problem, Goodbye')
    } else {
        num = prompt('Please enter a number between 0 & 10!');

        if (isNaN(num)){
            alert('Sorry Not a number, Goodbye');
        } else if (num < 0 || num > 10) {
            alert('Sorry it’s not a good number, Goodbye');
        } else {
            computerNumber = Math.round(Math.random() * 10);
        }
    }

    compareNumbers(num,computerNumber)
};

function compareNumbers(userNumber,computerNumber) {
    if (userNumber == computerNumber) {
        alert('WINNER')
    } else if (userNumber > computerNumber) {
        counter++;
        if(counter <3){
            alert('Your number is bigger then the computer’s, guess again');
            playTheGame();
        } else {
            alert('out of chances')
        }
    } else if(userNumber < computerNumber) {
        counter++;
        if(counter <3){
            alert('Your number is lower then the computer’s, guess again');
            playTheGame();
        } else {
            alert('out of chances')
        }
    }
};