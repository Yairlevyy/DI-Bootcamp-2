// // get a random number between 1 and 83

// const randomNumber = Math.floor(Math.random() * 83) + 1;

// // Function to fetch the data

// fetch('https://www.swapi.tech/api/people/1')
// .then(res=>{
//     return res.json()
// })
// .then(data=>{
//     const res = data.result.properties;
//     // name res.name
//     // height res.height
//     // gender res.gender
//     // birth year res.birth_year
//     // home world res.homeworld (fetch the data)
//     console.log(res)
// })
// .catch(e=>{
//     console.log('Oh No! That person isn"t available')
// });

// //homeworld

// fetch("https://www.swapi.tech/api/planets/1")
// .then(res=>res.json())
// .then(data=>console.log(data.result.properties.name))

// ************************************************************


let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    displayDivLoading();
    displayData();
})

async function displayData(){
    const num = getRandNum();
    try{
        const res = await fetch(`https://www.swapi.tech/api/people/${num}`);
        const data = await res.json();
        const {birth_year,gender,height,homeworld,name} = data.result.properties;
        const homeworld_res = await getHomeWorld(homeworld);
        const arrayData = [{id:'birth_year',value:birth_year},{id:'gender',value:gender},{id:'height',value:height},{id:'homeworld',value:homeworld_res},{id:'name',value:name}];
        display(arrayData);
        displayDivData();
    } catch(e) {
        displayDivError()
    }
    
};

function getRandNum(){
    return Math.floor(Math.random() * 83) + 1;
}

async function getHomeWorld(url){
    const res = await fetch(url);
    const data = await res.json();
    return data.result.properties.name;
}

function display(array){
    for (item of array){
        let tag = document.getElementById(item.id);
        tag.innerHTML = item.value;
    }
};

let data = document.getElementById('data');
let error = document.getElementById('error');
let loading = document.getElementById('loading');

function displayDivData(){
    loading.style.display = 'none';
    error.style.display = 'none';

    data.style.display = 'block';
};

function displayDivError(){
    loading.style.display = 'none';
    data.style.display = 'none';

    error.style.display = 'block';
};

function displayDivLoading(){
    data.style.display = 'none';
    error.style.display = 'none';

    loading.style.display = 'block';
};