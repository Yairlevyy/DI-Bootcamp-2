// Exercise 1

// let div = document.getElementById("container");
// console.log(div);

// let pete = document.querySelector('.list li:last-child');
// console.log(pete.innerHTML);
// pete.innerHTML = "Richard";
// console.log(pete);

// let ul = document.getElementsByClassName('list')[1];
// let sarah = ul.children[1];
// sarah.remove();

// let list = document.getElementsByClassName('list');

// let counter = 0;

// for (let elem of list) {
//     elem.firstElementChild.innerHTML = "Yair";
//     elem.classList.add('student_list');
//     counter++;
//     if (counter == 1) {
//         elem.classList.add('university','attendance')
//     }
// };

// Exercise 2

// let div = document.getElementsByTagName('div')[0];
// div.style.backgroundColor = 'lightblue';
// div.style.padding = '10px';

// let ul = document.getElementsByTagName('ul')[0];
// let john = ul.firstElementChild;

// john.remove();

// let pete = ul.firstElementChild;
// pete.style.border = '2px solid black';

// let body = document.querySelector('body');
// body.style.fontSize = "25px"

// Exercise 3

// let div = document.querySelector('div');
// div.setAttribute('id','socialNetworkNavigation');

// let li = document.createElement('li');
// let textLi = document.createTextNode('Logout');
// li.appendChild(textLi);
// let ul = document.querySelector('ul');
// ul.appendChild(li);

// let first = document.querySelector('ul li:first-child');
// console.log(first.textContent);

// let last = document.querySelector('ul li:last-child');
// console.log(last.textContent);

// Exercise 4

// let allBooks = [
//     {
//         title:"The 7 Habits of Highly Effective People",
//         author:"Stephen R. Covey",
//         image:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdnJlfGVufDB8fDB8fHww&w=1000&q=80",
//         alreadyRead:false
//     },
//     {
//     title: "Mindset: The New Psychology of Success",
//     author: "Carol S. Dweck",
//     image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdnJlfGVufDB8fDB8fHww&w=1000&q=80",
//     alreadyRead: true
//     },
//     {
//     title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
//     author: "James Clear",
//     image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdnJlfGVufDB8fDB8fHww&w=1000&q=80",
//     alreadyRead: true
//     },
//     {
//     title: "The Power of Now: A Guide to Spiritual Enlightenment",
//     author: "Eckhart Tolle",
//     image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdnJlfGVufDB8fDB8fHww&w=1000&q=80",
//     alreadyRead: false
//     },
// ];

// let div = document.querySelector('div');
// let table = document.createElement('table');
// div.appendChild(table);

// for (book of allBooks) {
//     let tr = document.createElement('tr');
//     div.appendChild(tr);
//     for(detail in book) {
//         let td = document.createElement('td');
//         td.style.border = '2px solid black';
//         if (detail == "image") {
//             let img = document.createElement('img');
//             img.setAttribute('src',book[detail]);
//             img.style.width = '100px'
//             td.appendChild(img);
//             tr.appendChild(td);
//         } else if (detail == 'title' && book['alreadyRead']) {
//             let text = document.createTextNode(book[detail]);
//             td.appendChild(text);
//             td.style.color = 'red';
//             tr.appendChild(td);
//         } else {
//             let text = document.createTextNode(book[detail]);
//             td.appendChild(text);
//             tr.appendChild(td);
//         }
//     };
// };

