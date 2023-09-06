// Exercise 1

// let xhr = new XMLHttpRequest();
// xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// xhr.send();

// xhr.onload = () => {
//     if (xhr.status === 200){
//         console.log(JSON.parse(xhr.response))
//     } else {
//         console.log(`${xhr.status} : ${xhr.statusText} `)
//     }
// }

// Exercise 2

let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.send();

xhr.onload = () => {
    if (xhr.status === 200){
        console.log(JSON.parse(xhr.response))
    } else {
        console.log(`${xhr.status} : ${xhr.statusText} `)
    }
}
