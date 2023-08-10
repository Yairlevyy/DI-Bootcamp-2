let form = document.forms[0];

let noun = form.noun;
let adjective = form.adjective;
let person = form.person;
let verb = form.verb;
let place = form.place;

let button = document.querySelector('#lib-button');

button.addEventListener('click', generateStory);

let story = document.querySelector('#story')

function generateStory(e) {
    e.preventDefault();
    
    nounValue = noun.value;
    adjectiveValue = adjective.value;
    personValue = person.value;
    verbValue = verb.value;
    placeValue = place.value;

    let array = [nounValue, adjectiveValue, personValue, verbValue, placeValue];

    if (checkInput(array)) {
        alert('Please do fill all the inputs. Enjoy the game!')
    } else {
        story.textContent = `Once upon a time, there was a ${adjectiveValue} ${nounValue} named ${personValue}. ${personValue} loved to ${verbValue} around the ${placeValue}. One day, while at the ${placeValue}, ${personValue} and the ${nounValue} found a hidden treasure. They were both so excited that they couldn't stop ${verbValue} and wagging their tails. Everyone at the ${placeValue} joined in the fun, and it turned into a day filled with laughter and joy.`;
    }

};

function checkInput(array) {
    if (array.includes('')) {
        return true
    } else {
        return false
    }
};