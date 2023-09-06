let form = document.forms[0];
let root = document.getElementById('root');

console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault();
    let input = document.getElementById('textInput');
    searchGif(input.value);
});

function searchGif(input){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${input}&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let response = JSON.parse(xhr.response);
            let data = response.data[0].images.downsized.url;
            displayGif(data)
        } else {
            return 'Une erreur est survenue'
        }
    }
};

function displayGif(url){
    let div = document.createElement('div');
    div.style.margin = '10px'
    let html = `<img src=${url}>
    <button onclick="deleteGif(event)" style="margin: 5px;">Delete</button>`
    div.innerHTML = html;
    root.appendChild(div)
}

function deleteGif(e){
    e.target.parentNode.remove()
};

function deleteAll(){
    let input = document.getElementById('textInput');
    input.value = '';
    root.innerHTML = '';
}