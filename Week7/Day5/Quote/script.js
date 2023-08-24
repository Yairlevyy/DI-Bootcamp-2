let quotes = [
  { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { id: 1, author: "Martin Luther King Jr.", quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." },
  { id: 2, author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
  { id: 3, author: "Steve Jobs", quote: "Your time is limited, don't waste it living someone else's life." },
  { id: 4, author: "Oprah Winfrey", quote: "The biggest adventure you can take is to live the life of your dreams." },
  { id: 5, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { id: 6, author: "J.K. Rowling", quote: "It does not do to dwell on dreams and forget to live." },
  { id: 7, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
];

// Get a random number between the length of the array - 1.
// choose a quote to display based on this number

const generateQuote = () => {
    const limit = quotes.length - 1;
    const randomNumber = Math.floor(Math.random() * limit);
    let quote = document.getElementById('quote');
    let author = document.getElementById('author');

    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
};

let button = document.querySelector('.container button')
button.addEventListener('click',generateQuote)

quotes.forEach((item)=>{
    item.like=0;
})

// Part 2

const addQuote = () => {
    const lastElem = quotes[quotes.length - 1];
    const lastId = lastElem.id;
    const quote = document.querySelector('#new_quote').value;
    const author = document.querySelector('#new_author').value;
    const element = {
        id: lastId + 1,
        quote,
        author,
        like: 0
    };
    quotes.push(element)
};

let button_add = document.querySelector('.container_bis button');
button_add.addEventListener('click',addQuote);

let input_num = document.getElementById('numbers_of');

const displayNumOf = (e) => {
    const id = e.target.id;
    const quote = document.getElementById('quote').innerHTML;
    const auhtor = document.getElementById('author').innerHTML;
    const actualQuote = quotes.find(quote => quote.author === author);

    switch (id) {
        case 'num_of_char':
            input_num.value = quote.length;
            break;
        case 'num_of_char_no_space':
            const quoteNoSpace = quote.replace(/\s/g, '')
            input_num.value = quoteNoSpace.length;
            break;
        case 'num_of_words':
            const array = quote.split(' ');
            input_num.value = array.length;
            break;
        case 'like':
            actualQuote.like += 1;
            break;
    }
};

let button_num_of = document.getElementsByClassName('num_of');

for (item of button_num_of) {
    item.addEventListener('click',displayNumOf)
};

// Part 3

let search = document.getElementById('search');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let auth_req = document.getElementById('auth_req');
let quote_auth = document.getElementById('quote_auth');
let author_auth = document.getElementById('author_auth');
let array_filtered = [];
let actual_id = 0;

const searchQuote = () => {
    const author = auth_req.value.toLowerCase();
    array_filtered = quotes.filter(item => item.author.toLowerCase() === author);

    displaySearchQuote(0)
};

function displaySearchQuote(num) {
    if (0 <= num && num < array_filtered.length ) {
        quote_auth.innerHTML = array_filtered[num].quote;
        author_auth.innerHTML = array_filtered[num].author;
    } else {
        actual_id = 0;
        quote_auth.innerHTML = array_filtered[0].quote;
        author_auth.innerHTML = array_filtered[0].author;
    }
};

search.addEventListener('click',searchQuote);

const navQuote = (e) => {
    switch (e.target.id) {
        case 'previous' :
            actual_id = actual_id - 1;
            displaySearchQuote(actual_id)
            break;
        case 'next' :
            actual_id = actual_id + 1;
            displaySearchQuote(actual_id)
            break;
    };
};


previous.addEventListener('click',navQuote);
next.addEventListener('click',navQuote);


